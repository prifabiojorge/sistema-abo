import { ReagentWell } from './reagent-well.js';
import { AnimationLoop } from './animation-loop.js';
import { getBloodTypeById, shouldAgglutinate, getBloodTypeByReactions } from '../utils/blood-logic.js';

export class SimulationEngine {
  constructor(eventBus) {
    this.bus = eventBus;
    this.loop = new AnimationLoop();
    this.wells = {};
    this.selectedType = null;
    this.mode = 'discovery';
    this.completed = false;
    this.completeTimeout = null;
  }

  init() {
    this.wells['anti-a'] = new ReagentWell('well-anti-a', 'anti-a', 'Anti-A');
    this.wells['anti-b'] = new ReagentWell('well-anti-b', 'anti-b', 'Anti-B');
    this.wells['anti-d'] = new ReagentWell('well-anti-d', 'anti-d', 'Anti-D');

    for (const well of Object.values(this.wells)) {
      this.loop.add((dt) => well.update(dt));
    }

    this.loop.start();
  }

  setMode(mode) {
    this.mode = mode; // 'discovery', 'standard', ou 'inverse'
    this.reset();
    if (this.mode === 'inverse') {
      for (const well of Object.values(this.wells)) {
        well.fillForInverseMode();
      }
    }
  }

  evaluateInverseMode() {
    const results = {};
    for (const [key, well] of Object.entries(this.wells)) {
      results[key] = well.manualAgglutinated;
    }
    const identifiedType = getBloodTypeByReactions(results['anti-a'], results['anti-b'], results['anti-d']);
    this.bus.emit('simulation:complete', {
      typeId: identifiedType ? identifiedType.id : 'unknown',
      typeData: identifiedType || { label: 'Desconhecido', description: 'Combinação inválida', frequencyLabel: '0%' },
      results
    });
  }

  selectType(typeId) {
    if (typeId === 'random') {
      const types = ['A_POS','A_NEG','B_POS','B_NEG','AB_POS','AB_NEG','O_POS','O_NEG'];
      this.selectedType = types[Math.floor(Math.random() * types.length)];
    } else {
      this.selectedType = typeId;
    }
    this.bus.emit('simulation:typeSelected', { typeId: this.selectedType });
  }

  dropBlood(wellType) {
    if (!this.selectedType) return false;
    const well = this.wells[wellType];
    if (!well || well.state !== 'empty') return false;

    well.addBlood(this.selectedType);
    this.bus.emit('simulation:wellFilled', { wellType, bloodType: this.selectedType });

    if (this.checkComplete()) {
      this.complete();
    }
    return true;
  }

  checkComplete() {
    return Object.values(this.wells).every(w => w.state === 'filled');
  }

  complete() {
    if (this.completed) return;
    this.completed = true;

    const typeData = getBloodTypeById(this.selectedType);
    const results = {};
    for (const [key, well] of Object.entries(this.wells)) {
      results[key] = shouldAgglutinate(this.selectedType, key);
    }

    this.completeTimeout = setTimeout(() => {
      this.bus.emit('simulation:complete', {
        typeId: this.selectedType,
        typeData,
        results
      });
    }, 800);
  }

  reset() {
    if (this.completeTimeout) {
      clearTimeout(this.completeTimeout);
      this.completeTimeout = null;
    }
    this.completed = false;
    for (const well of Object.values(this.wells)) {
      well.reset();
    }
    if (this.mode === 'discovery') {
      this.selectedType = null;
    }
    this.bus.emit('simulation:reset');
  }

  destroy() {
    this.loop.stop();
  }
}
