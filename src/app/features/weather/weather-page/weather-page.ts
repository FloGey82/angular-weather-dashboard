import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { WeatherSearch } from '../weather-search/weather-search';
import { WeatherCard } from '../weather-card/weather-card';
import { WeatherService } from '../../../core/services/weather.service';
import { ForecastCard } from '../forecast-card/forecast-card';
import { WeatherSkeleton } from "../../../shared/weather-skeleton/weather-skeleton";
import { ForecastSkeleton } from "../../../shared/forecast-skeleton/forecast-skeleton";

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [WeatherSearch, WeatherCard, ForecastCard, WeatherSkeleton, ForecastSkeleton],
  templateUrl: './weather-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherPage {
  weatherService = inject(WeatherService);

  nightMode = signal(false);

  toggleNightMode() {
    this.nightMode.set(!this.nightMode());

    const html = document.documentElement;
    const isDark = this.nightMode();
    html.classList.toggle('dark',isDark)
  }
}
