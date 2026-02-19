import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, debounceTime, of, tap } from 'rxjs';
import { environments } from '../../../environments/environments';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root',
})
export class GeoService {
  private readonly _http = inject(HttpClient);
  cityResponse = signal<City[]>([]);

  searchCity(query: string, limit = 15) {
    const url = `${environments.openWeatherGeoApiUrl}/direct?q=${query}&limit=${limit}&appid=${environments.openWeatherApiKey}`;

    this._http
      .get<City[]>(url)
      .pipe(
        tap((cityResponse) => {
          console.log({ cityResponse });
          this.cityResponse.set(cityResponse);
        }),
        debounceTime(200),
        catchError(() => of([])),
      )
      .subscribe();
  }
}
