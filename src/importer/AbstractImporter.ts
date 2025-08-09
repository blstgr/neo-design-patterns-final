/**
 * Патерн Template Method: визначає скелет алгоритму,
 * делегуючи реалізацію деяких кроків підкласам.
 */
export abstract class AbstractImporter<T> {
  constructor(protected raw: unknown) {}

  import(): void {
    this.validate();
    const model = this.map();
    this.render(model);
  }

  /**
   * Валідує вхідні дані перед обробкою
   */
  abstract validate(): void;

  /**
   * Перетворює вхідні дані на модель
   */
  abstract map(): T;

  /**
   * Рендерить модель у DOM
   */
  protected abstract render(model: T): void;
}