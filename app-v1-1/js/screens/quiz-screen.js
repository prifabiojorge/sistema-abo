import { QuestionLoader } from '../quiz/question-loader.js';
import { QuizEngine } from '../quiz/quiz-engine.js';
import { QuizRenderer } from '../quiz/quiz-renderer.js';

export class QuizScreen {
  constructor(bus, state, storage) {
    this.bus = bus;
    this.state = state;
    this.storage = storage;
    this.loader = new QuestionLoader();
    this.engine = null;
    this.renderer = null;
    this.initialized = false;
  }

  async init() {
    await this.loader.load();
    this.renderer = new QuizRenderer(this.bus);

    this.bus.on('quiz:answer', ({ optionId }) => {
      if (this.engine) this.engine.answer(optionId);
    });

    this.bus.on('quiz:advance', () => {
      if (this.engine) this.engine.advance();
    });

    this.bus.on('quiz:restart', () => {
      this.start();
    });

    this.bus.on('quiz:reset', () => {
      this.loader.reset();
      this.start();
    });

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'quiz') {
        this.start();
      } else if (this.engine) {
        this.engine.destroy();
      }
    });

    this.initialized = true;
  }

  start() {
    if (!this.initialized) return;
    this.engine = new QuizEngine(this.bus, this.state, this.storage);
    const questions = this.loader.getQuestions(10);
    this.engine.start(questions);
  }
}
