const BLOOD_TYPES = {
  A_POS:  { label: 'A+',  antigens: { A: true,  B: false, D: true },  frequencyLabel: '~34%', description: 'Tipo A positivo é o mais comum no Brasil. Possui antígeno A e fator Rh.' },
  A_NEG:  { label: 'A-',  antigens: { A: true,  B: false, D: false }, frequencyLabel: '~6%',  description: 'Tipo A negativo. Possui antígeno A, mas não possui fator Rh.' },
  B_POS:  { label: 'B+',  antigens: { A: false, B: true,  D: true },  frequencyLabel: '~8%',  description: 'Tipo B positivo. Possui antígeno B e fator Rh.' },
  B_NEG:  { label: 'B-',  antigens: { A: false, B: true,  D: false }, frequencyLabel: '~2%',  description: 'Tipo B negativo. Possui antígeno B, mas não possui fator Rh.' },
  AB_POS: { label: 'AB+', antigens: { A: true,  B: true,  D: true },  frequencyLabel: '~4%',  description: 'Tipo AB positivo. Possui antígenos A e B, e fator Rh. Receptor universal de hemácias.' },
  AB_NEG: { label: 'AB-', antigens: { A: true,  B: true,  D: false }, frequencyLabel: '~1%',  description: 'Tipo AB negativo. Possui antígenos A e B, mas não possui fator Rh.' },
  O_POS:  { label: 'O+',  antigens: { A: false, B: false, D: true },  frequencyLabel: '~36%', description: 'Tipo O positivo. Não possui antígenos A ou B, mas tem fator Rh. Doador universal de hemácias.' },
  O_NEG:  { label: 'O-',  antigens: { A: false, B: false, D: false }, frequencyLabel: '~9%',  description: 'Tipo O negativo. Não possui antígenos A, B nem fator Rh. Doador universal verdadeiro.' }
};

const REAGENT_MAP = {
  'anti-a': 'A',
  'anti-b': 'B',
  'anti-d': 'D'
};

export function getBloodTypeById(id) {
  return BLOOD_TYPES[id] || null;
}

export function shouldAgglutinate(bloodTypeId, reagentType) {
  const type = BLOOD_TYPES[bloodTypeId];
  if (!type) return false;
  const antigen = REAGENT_MAP[reagentType];
  if (!antigen) return false;
  return type.antigens[antigen] === true;
}

export function getAllBloodTypeIds() {
  return Object.keys(BLOOD_TYPES);
}

export function getBloodTypeByReactions(antiA, antiB, antiD) {
  const typeIds = Object.keys(BLOOD_TYPES);
  for (const id of typeIds) {
    const t = BLOOD_TYPES[id];
    if (t.antigens.A === antiA && t.antigens.B === antiB && t.antigens.D === antiD) {
      return { id, ...t };
    }
  }
  return null;
}
