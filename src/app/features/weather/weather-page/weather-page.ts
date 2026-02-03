import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [],
  templateUrl: './weather-page.html',
  styleUrl: './weather-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherPage {

}
