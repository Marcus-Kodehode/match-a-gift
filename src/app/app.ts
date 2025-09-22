import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <!-- Fullscreen, fixed video background -->
    <div class="bgv">
      <!-- bytt filnavn når du tester andre -->
      <video
        class="bgv__vid"
        src="/videos/VBG2.mp4"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster="/videos/VBG1.jpg"
      ></video>
      <div class="bgv__overlay"></div>
    </div>

    <!-- App UI over videoen -->
    <div class="app-shell min-h-screen bg-grid noise">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class App {}
