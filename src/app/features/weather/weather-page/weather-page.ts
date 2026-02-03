import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WeatherSearch } from "../weather-search/weather-search";

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [WeatherSearch],
  templateUrl: './weather-page.html',
  styleUrl: './weather-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherPage {

}
