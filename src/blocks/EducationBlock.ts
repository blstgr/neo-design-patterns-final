/**
 * Блок відображення освіти в резюме
 */

import { Education } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class EducationBlock implements IBlock {
  constructor(private readonly d: Education[]) {}

  /**
   * Рендеринг блоку освіти
   */
  render(): HTMLElement {
    // Створюємо секцію
    const el = document.createElement("section");
    el.className = "section education";
    el.innerHTML = "<h2>Education</h2>";

    this.d.forEach((edu) => {
      const item = document.createElement("div");
      item.className = "education-item";

      const institution = document.createElement("h3");
      institution.textContent = edu.institution;

      const degree = document.createElement("p");
      degree.textContent = edu.degree;

      const graduation = document.createElement("p");
      graduation.textContent = `Graduated: ${edu.graduation}`;

      item.appendChild(institution);
      item.appendChild(degree);
      item.appendChild(graduation);

      el.appendChild(item);
    });

    return el;
  }
}