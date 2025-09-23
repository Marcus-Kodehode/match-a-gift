import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <!-- Fullscreen, fixed bilde-background -->
    <div class="bg-img">
      <img class="bg-img__el" src="/images/BG1.webp" alt="Background" />
      <div class="bg-img__overlay"></div>
    </div>

    <!-- App UI -->
    <div class="app-shell min-h-screen">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class App {}
