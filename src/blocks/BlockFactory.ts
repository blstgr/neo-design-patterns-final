/**
 * Патерн Factory Method (Фабричний метод)
 *
 * Клас BlockFactory відповідає за створення різних типів блоків резюме
 * залежно від типу, переданого як параметр.
 */

import {
  ResumeModel,
  Education,
  Experience,
  Skills,
} from "../models/ResumeModel";

import { HeaderBlock } from "./HeaderBlock";
import { SummaryBlock } from "./SummaryBlock";
import { ExperienceBlock } from "./ExperienceBlock";
import { EducationBlock } from "./EducationBlock";
import { SkillsBlock } from "./SkillsBlock";

export interface IBlock {
  render(): HTMLElement;
}

export type BlockType =
    | "header"
    | "summary"
    | "experience"
    | "education"
    | "skills";

export class BlockFactory {
  /**
   * Метод для створення блоку відповідного типу
   *
   * @param type Тип блоку для створення
   * @param model Дані моделі для цього блоку
   * @returns Створений блок, готовий для рендерингу
   *
   * відповідний блок залежно від типу, використовуючи патерн Factory Method.
   */
  createBlock(type: BlockType, model: ResumeModel): IBlock {
    switch (type) {
      case "header":
        return new HeaderBlock(model.header);
      case "summary":
        return new SummaryBlock(model.summary);
      case "experience": {
        const experience: Experience[] = model.experience;
        return new ExperienceBlock(experience);
      }
      case "education": {
        const education: Education[] = model.education;
        return new EducationBlock(education);
      }
      case "skills": {
        const skills: Skills = model.skills;
        return new SkillsBlock(skills);
      }
      default:
        throw new Error(`Unknown block type: ${type}`);
    }
  }
}