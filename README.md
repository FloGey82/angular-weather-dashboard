# Angular Weather App

A modern and lightweight weather application built with **Angular 21**, showcasing
the latest Angular features such as **standalone components**, **signals**, and
the **new control flow syntax**.

## Features
- Search current weather by city name
- Integration with the OpenWeatherMap API
- Reactive state management using Angular Signals
- Standalone component architecture with lazy loading
- Reactive Forms for user input
- Proper loading and error handling
- Fully responsive layout

## Tech Stack
- Angular 21
- TypeScript
- RxJS
- SCSS
- OpenWeatherMap API

## Architecture
- Modern standalone component approach (no NgModules)
- Feature-based project structure
- Dedicated services for data access and business logic
- Signal-based state management for improved performance and clarity

## Screenshots
![Search](screenshots/search.png)
![Weather](screenshots/weather.png)

## Run locally
1. Copy `src/environments/environment.example.ts` to `src/environments/environment.ts`
2. Add your OpenWeatherMap API key

```bash
npm install
ng serve
