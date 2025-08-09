/**
 * Блок відображення короткого опису резюме
 */

import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class SummaryBlock implements IBlock {
  constructor(private readonly d: ResumeModel["summary"]) {}

  /**
   * Рендеринг блоку короткого опису
   */
  render(): HTMLElement {
    // Створюємо секцію
    const el = document.createElement("section");
    el.className = "section summary";

    const title = document.createElement("h2");
    title.textContent = "Summary";

    const text = document.createElement("p");
    text.textContent = this.d.text;

    el.appendChild(title);
    el.appendChild(text);

    return el;
  }
}