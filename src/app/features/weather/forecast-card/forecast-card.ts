import { Component, input } from '@angular/core';
import { forecastResponse } from '../../../core/models/forecast.models';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-forecast-card',
  imports: [DatePipe, DecimalPipe],
  templateUrl: './forecast-card.html',
  standalone: true,
})
export class ForecastCard {
  forecast = input<forecastResponse | null>(null);
}
