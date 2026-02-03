import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';

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

  onSubmit() {
    if (!this.searchForm.value.city) return;

    const city = this.searchForm.value.city!;
    this.error.set(null);
    this.loading.set(true);

    setTimeout(() => {
      this.loading.set(false);
      console.log('City searched: ', city);
    }, 1000);
  }
}
