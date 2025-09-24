import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Fast/fixed logo-capsule øverst – alltid tilgjengelig -->
    <header class="fixed top-0 inset-x-0 z-20 pointer-events-none">
      <div class="mx-auto max-w-5xl px-4 pt-4">
        <div
          class="pointer-events-auto inline-flex items-center gap-3 rounded-2xl
                 border border-white/10 bg-black/25 backdrop-blur-md px-3 py-2
                 shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/10"
        >
          <a class="inline-flex items-center gap-3" routerLink="/" aria-label="Go to start">
            <img
              src="/images/MAG-logo.png"
              alt="Match-a-gift"
              class="h-8 w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]
                     [filter:drop-shadow(0_0_16px_rgba(59,130,246,0.20))]"
            />
            <span class="hidden sm:inline text-white/95 font-semibold tracking-wide">
              match-a-gift
            </span>
          </a>

          <span
            class="ml-2 hidden md:inline-block h-1.5 w-16 rounded-full
                   bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500"
            aria-hidden="true"
          ></span>
        </div>
      </div>
    </header>

    <!-- Midt-innhold: progress + tittel (kan slås av per side) -->
    <div class="progress-wrap" *ngIf="showTitle || showProgress">
      <div class="progress-rail relative" *ngIf="showProgress">
        <div
          class="progress-bar transition-all duration-500 ease-out"
          [style.width]="progress"
        ></div>
      </div>

      <h1 class="title title-hero mt-6" *ngIf="showTitle">
        <ng-container *ngIf="getTitleParts() as parts">
          {{ parts.main }} <span class="title-accent">{{ parts.accent }}</span>
        </ng-container>
      </h1>
    </div>
  `,
  styles: [
    `
      /* Hero tittel – samme look, men uten å spamme globale styles */
      .title-hero {
        position: relative;
        font-size: clamp(1.75rem, 4vw, 3rem);
        line-height: 1.2;
        letter-spacing: -0.03em;
      }
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

      .title-hero:hover .title-accent {
        filter: drop-shadow(0 0 40px rgba(255, 216, 155, 0.7))
          drop-shadow(0 4px 25px rgba(245, 197, 99, 0.6));
        transform: scale(1.05);
        transition: all 0.3s ease;
      }

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
  /** Tittel-tekst (vi gjør siste ord til accent) */
  @Input() title = '';
  /** f.eks. "25%" */
  @Input() progress = '0%';

  /** Skru av/på deler per side */
  @Input() showTitle = true;
  @Input() showProgress = true;

  getTitleParts(): { main: string; accent: string } {
    const words = (this.title || '').trim().split(' ');
    if (words.length <= 1) return { main: '', accent: this.title || '' };
    const accent = words.pop() || '';
    return { main: words.join(' '), accent };
  }
}
