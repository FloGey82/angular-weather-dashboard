import { Component, inject, input } from '@angular/core';
import { forecastResponse } from '../../../core/models/forecast.models';
import { DatePipe, DecimalPipe } from '@angular/common';
import { WeatherService } from '../../../core/services/weather.service';

@Component({
  selector: 'app-forecast-card',
  imports: [DatePipe, DecimalPipe],
  templateUrl: './forecast-card.html',
  standalone: true,
})
export class ForecastCard {
  forecast = input<forecastResponse | null>(null);
  weatherService = inject(WeatherService);
}
