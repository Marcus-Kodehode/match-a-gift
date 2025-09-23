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

      <!-- Enhanced title med gradient accent på siste ord -->
      <h1 class="title title-hero mt-6">
        <ng-container *ngIf="getTitleParts() as parts">
          {{ parts.main }} <span class="title-accent">{{ parts.accent }}</span>
        </ng-container>
      </h1>
    </div>
  `,
  styles: [
    `
      /* Hero title med ekstra WOW-faktor */
      .title-hero {
        position: relative;
        font-size: clamp(1.75rem, 4vw, 3rem);
        line-height: 1.2;
        letter-spacing: -0.03em;
      }

      /* Accent word med gyllen gradient */
      .title-accent {
        display: inline-block;
        background: linear-gradient(
          135deg,
          #ffd89b 0%,
          #f5c563 25%,
          #ffb347 50%,
          #ffd89b 75%,
          #f5c563 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer-gold 3s ease-in-out infinite;
        filter: drop-shadow(0 0 30px rgba(255, 216, 155, 0.5))
          drop-shadow(0 4px 20px rgba(245, 197, 99, 0.4));
      }

      @keyframes shimmer-gold {
        0%,
        100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }

      /* Extra glow på hover */
      .title-hero:hover .title-accent {
        filter: drop-shadow(0 0 40px rgba(255, 216, 155, 0.7))
          drop-shadow(0 4px 25px rgba(245, 197, 99, 0.6));
        transform: scale(1.05);
        transition: all 0.3s ease;
      }

      /* Progress bar får subtil puls-effekt */
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
        .title-accent,
        .progress-bar {
          animation: none !important;
        }
      }
    `,
  ],
})
export class StepHeaderComponent {
  @Input() title = '';
  @Input() progress = '0%';

  getTitleParts(): { main: string; accent: string } {
    // Split på siste ord for å gjøre det til accent
    const words = this.title.trim().split(' ');
    if (words.length <= 1) {
      return { main: '', accent: this.title };
    }

    const accent = words.pop() || '';
    const main = words.join(' ');
    return { main, accent };
  }
}
