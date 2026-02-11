import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WeatherSearch } from '../weather-search/weather-search';
import { WeatherCard } from '../weather-card/weather-card';
import { WeatherService } from '../../../core/services/weather.service';
import { ForecastCard } from "../forecast-card/forecast-card";

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [WeatherSearch, WeatherCard, ForecastCard],
  templateUrl: './weather-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherPage {
  weatherService = inject(WeatherService);
}
