import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/weather/weather-page/weather-page').then((m) => m.WeatherPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
