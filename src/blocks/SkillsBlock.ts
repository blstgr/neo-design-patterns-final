/**
 * Блок відображення навичок резюме
 */

import { Skills } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SkillsBlock implements IBlock {
  constructor(private readonly d: Skills) {}

  /**
   * Рендеринг блоку навичок
   *
   * та їх списків у вигляді HTML елементів
   */
  render(): HTMLElement {
    // Створюємо секцію
    const sec = document.createElement("section");
    sec.className = "section skills";
    sec.innerHTML = "<h2>Skills</h2>";

    Object.entries(this.d).forEach(([category, skills]) => {
      const group = document.createElement("div");
      group.className = "skill-group";

      const title = document.createElement("h3");
      title.textContent = category[0].toUpperCase() + category.slice(1);

      const list = document.createElement("ul");
      skills.forEach((s: string | null) => {
        const li = document.createElement("li");
        li.textContent = s;
        list.appendChild(li);
      });

      group.appendChild(title);
      group.appendChild(list);
      sec.appendChild(group);
    });

    return sec;
  }
}