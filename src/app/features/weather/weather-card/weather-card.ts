import { Component, inject, input } from '@angular/core';
import { WeatherResponse } from '../../../core/models/weather.model';
import { DecimalPipe } from '@angular/common';
import { WeatherService } from '../../../core/services/weather.service';

@Component({
  selector: 'app-weather-card',
  imports: [DecimalPipe],
  templateUrl: './weather-card.html',
  standalone: true,
})
export class WeatherCard {
  weather = input<WeatherResponse | null>(null);
  weatherService = inject(WeatherService);
}
