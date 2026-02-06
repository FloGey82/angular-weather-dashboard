import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { WeatherService } from '../../../core/services/weather.service';

@Component({
  selector: 'app-weather-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './weather-search.html',
  styleUrl: './weather-search.scss',
})
export class WeatherSearch {
  searchForm = new FormGroup({ city: new FormControl('', Validators.required) });
  loading = signal(false);
  error = signal<string | null>(null);

  private readonly _weatherService = inject(WeatherService);

  onSubmit() {
    if (!this.searchForm.value.city) return;

    const city = this.searchForm.value.city!;
    this._weatherService.getWeather(city);
    this._weatherService.getForecast(city);
  }
}
