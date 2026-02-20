import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  imports: [],
  templateUrl: './dark-mode-toggle.html',
  standalone: true,
})
export class DarkModeToggle {
  darkMode = signal(false);

  toggleNightMode() {
    this.darkMode.set(!this.darkMode());

    const html = document.documentElement;
    const isDark = this.darkMode();
    html.classList.toggle('dark', isDark);
  }
}
