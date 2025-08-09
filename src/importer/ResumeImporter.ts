/**
 * Конкретна реалізація імпортера резюме
 * Наслідується від AbstractImporter і реалізує абстрактні методи
 */

import { AbstractImporter } from "./AbstractImporter";
import { ResumeModel } from "../models/ResumeModel";
import { BlockFactory, BlockType } from "../blocks/BlockFactory";

export class ResumeImporter extends AbstractImporter<ResumeModel> {
  /**
   * Перевіряє, чи відповідає JSON-об'єкт очікуваній структурі
   */
    public validate(): void {
    const r = this.raw as ResumeModel;

    if (
        !r ||
        typeof r !== "object" ||
        !("header" in r) ||
        !("summary" in r) ||
        !("experience" in r) ||
        !("education" in r) ||
        !("skills" in r)
    ) {
      throw new Error("Неприпустимий формат JSON: відсутні обов’язкові поля");
    }
  }

  /**
   * Перетворює JSON-дані у внутрішню модель резюме
   */
  public map(): ResumeModel {
    return this.raw as ResumeModel;
  }

  /**
   * Рендерить модель резюме у DOM
   */
  public render(model: ResumeModel): void {
    const root = document.getElementById("resume-content")!;
    const factory = new BlockFactory();

    (["header", "summary", "experience", "education", "skills"] as BlockType[]).forEach((type) => {
      const block = factory.createBlock(type, model);
      root.appendChild(block.render());
    });
  }
}