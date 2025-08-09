# neo-design-patterns-hw-11
Цей застосунок демонструє використання патернів Ланцюжок відповідальностей та Посередник для обробки структурованих даних із вхідного JSON-файлу.

## Функціональність
- Ланцюжок відповідальностей — кожен тип запису (access_log, transaction, system_error) обробляється окремим ланцюгом з валідацією та нормалізацією.
- Посередник — централізує збереження результатів обробки у відповідні файли.
- Всі помилкові записи записуються у файл rejected.jsonl з описом причини.

## Структура проєкту
```text
src/
├── chain/
│   ├── AbstractHandler.ts
│   ├── chains/                  # Ланцюги для кожного типу
│   │   ├── AccessLogChain.ts
│   │   ├── TransactionChain.ts
│   │   └── SystemErrorChain.ts
│   └── handlers/               # Обробники-перевірки
│       ├── AmountParser.ts
│       ├── CurrencyNormalizer.ts
│       ├── IpValidator.ts
│       ├── LevelValidator.ts
│       ├── MessageTrimmer.ts
│       ├── TimestampParser.ts
│       └── UserIdValidator.ts
├── mediator/
│   ├── ProcessingMediator.ts
│   └── writers/                # Збереження оброблених записів
│       ├── AccessLogWriter.ts
│       ├── TransactionWriter.ts
│       ├── ErrorLogWriter.ts
│       └── RejectedWriter.ts
├── models/
│   └── DataRecord.ts           # Типи даних
├── data/
│   └── records.json            # Вхідні записи
├── output/                     # Вихідні файли
└── main.ts                     # Точка входу
```

## Запуск 
```bash
npx ts-node src/main.ts
```

## Вивід у консолі
```text
[INFO] Завантажено записів: 19
[INFO] Успішно оброблено: 9
[WARN] Відхилено з помилками: 10
[INFO] Звіт збережено у директорії output/
```

## Згенеровані файли
- `output/access_logs.json` — масив оброблених access_log.
- `output/transactions.csv` — таблиця з transaction.
- `output/errors.jsonl` — потік рядків system_error.
- `output/rejected.jsonl` — відхилені записи з описом помилок.

## Вимоги
- Node.js
- TypeScript
- ts-node

## Встановлення залежностей
```bash
npm install
```

