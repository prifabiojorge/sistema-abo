import { QuestionLoader } from '../quiz/question-loader.js';
import { QuizEngine } from '../quiz/quiz-engine.js';
import { QuizRenderer } from '../quiz/quiz-renderer.js';
import { EmptyState, SkeletonManager } from '../ui/skeleton.js';

export class QuizScreen {
  constructor(bus, state, storage) {
    this.bus = bus;
    this.state = state;
    this.storage = storage;
    this.loader = new QuestionLoader(storage);
    this.engine = null;
    this.renderer = null;
    this.initialized = false;
    this.startTimer = null;
  }

  async init() {
    SkeletonManager.renderQuiz(document.getElementById('quiz-content'));
    await this.loader.load();
    this.renderer = new QuizRenderer(this.bus);

    this.bus.on('quiz:answer', ({ optionId }) => {
      if (this.engine) this.engine.answer(optionId);
    });

    this.bus.on('quiz:advance', () => {
      if (this.engine) this.engine.advance();
    });

    this.bus.on('quiz:restart', () => {
      this.loader.load();
      this.start();
    });

    this.bus.on('quiz:reset', () => {
      this.loader.reset();
      this.loader.load();
      this.start();
    });

    this.bus.on('quiz:error', ({ message }) => {
      EmptyState.render(this.renderer?.container, {
        icon: '❓',
        title: 'Quiz indisponível',
        desc: message || 'Não foi possível carregar as questões agora.',
        ctaLabel: 'Voltar ao início',
        ctaHref: '#home'
      });
    });

    this.bus.on('screen:change', ({ to }) => {
      if (to === 'quiz') {
        this.start();
      } else {
        if (this.startTimer) {
          clearTimeout(this.startTimer);
          this.startTimer = null;
        }
        if (this.engine) this.engine.destroy();
      }
    });

    this.initialized = true;
  }

  start() {
    if (!this.initialized || !this.renderer) return;

    if (this.startTimer) clearTimeout(this.startTimer);
    SkeletonManager.renderQuiz(this.renderer.container);

    this.startTimer = setTimeout(() => {
      this.engine = new QuizEngine(this.bus, this.state, this.storage);
      const questions = this.loader.getQuestions(10);

      if (!questions || questions.length === 0) {
        EmptyState.render(this.renderer.container, {
          icon: '❓',
          title: 'Ainda não há questões',
          desc: 'Adicione ou restaure o banco de questões para iniciar o quiz.',
          ctaLabel: 'Ir para início',
          ctaHref: '#home'
        });
        return;
      }

      this.engine.start(questions);
    }, 300);
  }
}
