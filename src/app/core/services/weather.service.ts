import { inject, Injectable, signal } from '@angular/core';
import { WeatherResponse } from '../models/weather.model';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { catchError, finalize, tap, throwError } from 'rxjs';
import { forecastItem, forecastResponse } from '../models/forecast.models';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  currentWeather = signal<WeatherResponse | null>(null);
  forecast = signal<forecastResponse | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  private _http = inject(HttpClient);

  getWeather(city: string) {
    this.loading.set(true);
    this.error.set(null);

    const url = `${environments.openWeatherApiUrl}/weather?q=${city}&appid=${environments.openWeatherApiKey}&units=metric`;

    this._http
      .get<WeatherResponse>(url)
      .pipe(
        tap((res) => this.currentWeather.set(res)),

        catchError((err) => {
          if (err.status === 404) {
            this.error.set('City not found');
          } else {
            this.error.set('API error');
          }

          return throwError(() => err);
        }),

        finalize(() => this.loading.set(false)),
      )
      .subscribe();
  }

  getForecast(city: string) {
    this.loading.set(true);
    this.error.set(null);

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${environments.openWeatherApiKey}&units=metric`;

    this._http
      .get<forecastResponse>(url)
      .pipe(
        tap((forecastResponse) => this.forecast.set(forecastResponse)),
        catchError((err) => {
          if (err.status === 404) {
            this.error.set('City not found');
          } else {
            this.error.set('API error');
          }
          return throwError(() => err);
        }),
        finalize(() => this.loading.set(false)),
      )
      .subscribe();
  }
}
