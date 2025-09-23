import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-wrap">
      <!-- Progress rail med enhanced styling -->
      <div class="progress-rail relative">
        <div
          class="progress-bar transition-all duration-500 ease-out"
          [style.width]="progress"
        ></div>
      </div>

      <!-- Tittel med ekstra glow effekt -->
      <h1 class="title mt-6 text-glow animate-fade-in">
        {{ title }}
      </h1>

      <!-- Optional subtitle hvis ønsket -->
      <p *ngIf="subtitle" class="subtitle mt-2 animate-fade-in-delay">
        {{ subtitle }}
      </p>
    </div>
  `,
  styles: [
    `
      @keyframes fade-in {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fade-in-delay {
        0%,
        20% {
          opacity: 0;
          transform: translateY(-8px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in {
        animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      .animate-fade-in-delay {
        animation: fade-in-delay 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      /* Progress bar får subtil puls-effekt når den er aktiv */
      .progress-bar {
        position: relative;
        animation: pulse-glow 2s ease-in-out infinite;
      }

      @keyframes pulse-glow {
        0%,
        100% {
          filter: brightness(1) drop-shadow(0 0 16px rgba(79, 217, 217, 0.4));
        }
        50% {
          filter: brightness(1.1) drop-shadow(0 0 24px rgba(79, 217, 217, 0.6));
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .animate-fade-in,
        .animate-fade-in-delay,
        .progress-bar {
          animation: none !important;
        }
      }
    `,
  ],
})
export class StepHeaderComponent {
  @Input() title = '';
  @Input() subtitle = ''; // Ny optional subtitle
  @Input() progress = '0%';
}
