/**
 * Блок відображення заголовка резюме
 */

import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class HeaderBlock implements IBlock {
  constructor(private d: ResumeModel["header"]) {}

  /**
   * Рендеринг блоку заголовка
   *
   * для відображення даних заголовка: ім'я, позиція та контактна інформація.
   */
  render(): HTMLElement {
    // Створюємо контейнер для заголовка
    const header = document.createElement("header");
    header.className = "section header";

    const { fullName, title, contacts } = this.d;
    const { email, phone, location } = contacts;

    const contactParts = [email, phone, location].filter(Boolean).join(" | ");

    header.innerHTML = `
      <h1>${fullName}</h1>
      <p>${title}</p>
      <p>${contactParts}</p>
    `;

    return header;
  }
}