import { Component, input } from '@angular/core';
import { forecastResponse } from '../../../core/models/forecast.models';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-forecast-card',
  imports: [DatePipe],
  templateUrl: './forecast-card.html',
  styleUrl: './forecast-card.scss',
  standalone: true,
})
export class ForecastCard {
  forecast = input<forecastResponse | null>(null);
}
