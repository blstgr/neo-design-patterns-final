/**
 * Патерн Composite (Компоновщик)
 *
 * Блок досвіду роботи, який містить дочірні блоки проєктів
 */

import { Experience, Project } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";
import { ProjectBlock } from "./ProjectBlock";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ExperienceBlock implements IBlock {
  constructor(private readonly d: Experience[]) {}

  /**
   * Рендеринг блоку досвіду роботи
   */
  render(): HTMLElement {
    const container = document.createElement("section");
    container.className = "section experience";
    container.innerHTML = "<h2>Experience</h2>";

    this.d.forEach((exp ) => {
      const item = document.createElement("div");
      item.className = "experience-item";

      item.innerHTML += `
        <h3>${exp.position}</h3>
        <p>${exp.company}</p>
      `;

      exp.projects.forEach((p: Project) => {
        const raw = new ProjectBlock(p).render();
        const wrapped = p.isRecent ? new HighlightDecorator(raw).render() : raw;
        item.appendChild(wrapped);
      });

      container.appendChild(item);
    });

    return container;
  }
}