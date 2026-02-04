import { inject, Injectable, signal } from '@angular/core';
import { WeatherResponse } from '../models/weather.model';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  currentWeather = signal<WeatherResponse | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);

  private _http = inject(HttpClient);

  getWeather(city: string) {
    this.loading.set(true);
    this.error.set(null);

    const url = `${environments.openWeatherApiUrl}/weather?q=${city}&appid=${environments.openWeatherApiKey}`;

    this._http
      .get<WeatherResponse>(url)
      .pipe(
        tap((res) => this.currentWeather.set(res)),
        catchError((err) => {
          this.error.set('City not found or API error');
          return throwError(() => err);
        }),
      )
      .subscribe({ next: () => this.loading.set(false), error: () => this.loading.set(false) });
  }
}
