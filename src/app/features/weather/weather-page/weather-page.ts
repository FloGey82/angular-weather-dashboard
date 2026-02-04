import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WeatherSearch } from '../weather-search/weather-search';
import { WeatherCard } from '../weather-card/weather-card';
import { WeatherService } from '../../../core/services/weather.service';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [WeatherSearch, WeatherCard],
  templateUrl: './weather-page.html',
  styleUrl: './weather-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherPage {
  weatherService = inject(WeatherService);
}
