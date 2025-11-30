## Запуск проекта

```
npm install - устанавливаем зависимости;
npm run start - заупск проекта;
npm run start:dev:server - запуск json-server с нашей бд;

```
-----
## Архитектура проекта
```
 Используется [feature slice design](https://feature-sliced.github.io/documentation/ru/docs/get-started/overview).
 Feature-Sliced Design (FSD) — это архитектурная методология для проектирования фронтенд-приложений. Проще говоря, это набор правил и соглашений по организации кода. Главная цель этой методологии — сделать проект понятнее и стабильнее в условиях постоянно меняющихся бизнес-требований.
```


## Скрипты

   - "npm run start": "webpack serve --env port=3000",
   - "npm run start:dev:server": "node ./json-server/index.js",
   - "npm run build:prod": "webpack --env mode=production apiUrl=https://production-project-server-mxg54dxze-areuss-projects.vercel.app",
   - "npm run build:dev": "webpack --env mode=development",
   - "npm run build": "webpack",
   - "npm run lint:ts": "eslint \"**/*.{ts,tsx}\"",
   - "npm run lint:ts:fix": "eslint \"**/*.{ts,tsx}\" --fix",
   - "npm run lint:js:fix": "eslint \"**/*.{js}\" --fix",
   - "npm run lint:scss": "npx stylelint \"**/*.scss\"",
   - "npm run lint:scss:fix": "npx stylelint \"**/*.scss\" --fix",
   - "npm run jest:init": "jest --init",
   - "npm run test:unit": "jest --config ./config/jest/jest.config.ts",
   - "npm run test:ui": "loki test",
   - "npm run test:ui:update": "loki update",
   - "npm run test:ui:ok": "loki test approved",
   - "npm run test:ui:ci": "npx loki --requireReference --reactUri file:./storybook-static",
   - "npm run test:ui:report": "npm run test:ui:json && npm run test:ui:html",
   - "npm run test:ui:json": "node scripts/generate-visual-json-report.js",
   - "npm run test:ui:html": "reg-cli --from .loki/report.json --report .loki/report.html",
   - "npm run storybook": "storybook dev -p 6006 -c ./config/storybook",
   - "npm run storybook:build": "build-storybook -c ./config/storybook",
   - "npm run generate:slice": "node ./scripts/generateSlice/index.js",
   - "npm run build-storybook": "storybook build"
----

## Сущности

```
 - [Article](/src/entities/Article)
 - [Comment](/src/entities/Comment)
 - [Country](/src/entities/Country)
 - [Currency](/src/entities/Currency)
 - [Notifications](/src/entities/Notifications)
 - [Profile](/src/entities/Profile)
 - [Rating](/src/entities/Rating)
 - [User](/src/entities/User/) 
```
-----