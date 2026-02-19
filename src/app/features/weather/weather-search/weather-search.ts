import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { WeatherService } from '../../../core/services/weather.service';
import { GeoService } from '../../../core/services/geo-service';

@Component({
  selector: 'app-weather-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './weather-search.html',
})
export class WeatherSearch {
  loading = signal(false);
  error = signal<string | null>(null);

  private readonly _weatherService = inject(WeatherService);
  private readonly _geoService = inject(GeoService);
  private readonly _fb = inject(FormBuilder);

  cityResponse = this._geoService.cityResponse;
  searchForm: FormGroup = this._fb.group({
    city: ['', Validators.required],
  });

  onCityInput() {
    const value = this.searchForm.get('city')!.value;
    if (value) {
      this._geoService.searchCity(value);
    } else {
      this.cityResponse.set([]);
    }
  }

  onSubmit() {
    if (!this.searchForm.value.city) return;
    const city = this.searchForm.value.city!;
    this._weatherService.getWeather(city);
    this._weatherService.getForecast(city);
    this.searchForm.get('city')!.setValue('');
    this.cityResponse.set([]);
  }

  selectCity(city: string) {
    if (!city) {
      return;
    }

    this.searchForm.get('city')!.setValue(city);
    this.onSubmit();
  }
}
