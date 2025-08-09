# neo-design-patterns-final
Цей застосунок демонструє використання п’яти патернів проєктування: Facade, Template Method, Factory Method, Composite та Decorator. Резюме генерується динамічно на основі даних із файлу `resume.json`.

## Функціональність
- Facade — `ResumePage` є єдиною точкою входу, яка приховує деталі завантаження, обробки та рендерингу резюме.
- Template Method — `AbstractImporter` визначає шаблон алгоритму імпорту, а `ResumeImporter` реалізує конкретні кроки: `validate`, `map`, `render`.
- Factory Method — `BlockFactory` створює відповідні блоки резюме залежно від типу.
- Composite — `ExperienceBlock` містить вкладені `ProjectBlock` елементи, підтримуючи рекурсивну структуру.
- Decorator — `HighlightDecorator` додає стилі до проєктів з прапорцем `isRecent: true` без зміни їх структури.

## Структура проєкту
```text
src/
├── blocks/
│   ├── BlockFactory.ts
│   ├── EducationBlock.ts
│   ├── ExperienceBlock.ts
│   ├── HeaderBlock.ts
│   ├── ProjectBlock.ts
│   ├── SkillsBlock.ts
│   └── SummaryBlock.ts
├── decorators/
│   └── HighlightDecorator.ts
├── facade/
│   └── ResumePage.ts
├── importer/
│   ├── AbstractImporter.ts
│   └── ResumeImporter.ts
├── models/
│   └── ResumeModel.ts
├── styles.css
├── main.ts
├── resume.json
└── index.html
```

## Запуск 
```bash
npm install
npm run dev
```

## Очікуваний результат
- Резюме рендериться у браузері на базі `resume.json`
- Відображаються всі блоки: Header, Summary, Experience, Education, Skills
- Проєкти з `isRecent: true` підсвічуються стилем .highlight

## Вимоги
- Node.js
- TypeScript
- ts-node

## Встановлення залежностей
```bash
npm install
```

