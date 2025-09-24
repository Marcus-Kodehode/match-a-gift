import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-step-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Premium logo med Aurora Night effekter -->
    <header class="fixed z-30 top-3 left-1/2 -translate-x-1/2 pointer-events-none">
      <a routerLink="/" aria-label="Go to start" class="pointer-events-auto block logo-container">
        <div class="logo-wrapper">
          <img src="/images/MAG-logo.png" alt="Match-a-gift" class="mag-logo" />
          <!-- Animated glow rings -->
          <div class="glow-ring-1"></div>
          <div class="glow-ring-2"></div>
        </div>
      </a>
    </header>
  `,
  styles: [
    `
      .logo-container {
        position: relative;
        display: inline-block;
      }

      .logo-wrapper {
        position: relative;
        display: inline-block;
      }

      /* Enhanced logo med Aurora Night glow */
      .mag-logo {
        height: clamp(52px, 7vw, 100px);
        width: auto;
        position: relative;
        z-index: 10;

        /* Multi-layer Aurora glow */
        filter: drop-shadow(0 12px 32px rgba(0, 0, 0, 0.5))
          drop-shadow(0 0 40px rgba(79, 217, 217, 0.4)) /* aurora-teal */
          drop-shadow(0 0 60px rgba(155, 123, 222, 0.25)) /* aurora-purple */
          drop-shadow(0 0 80px rgba(245, 197, 99, 0.15)); /* aurora-gold */

        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        image-rendering: crisp-edges;
      }

      /* Premium hover effect */
      .logo-container:hover .mag-logo {
        transform: translateY(-2px) scale(1.05);
        filter: drop-shadow(0 16px 40px rgba(0, 0, 0, 0.6))
          drop-shadow(0 0 50px rgba(79, 217, 217, 0.6))
          drop-shadow(0 0 70px rgba(155, 123, 222, 0.4))
          drop-shadow(0 0 90px rgba(245, 197, 99, 0.3));
      }

      /* Animated glow rings */
      .glow-ring-1,
      .glow-ring-2 {
        position: absolute;
        inset: -20px;
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.6;
      }

      .glow-ring-1 {
        background: radial-gradient(
          circle,
          rgba(79, 217, 217, 0.15) 0%,
          rgba(79, 217, 217, 0.08) 40%,
          transparent 70%
        );
        animation: pulse-ring-1 3s ease-in-out infinite;
      }

      .glow-ring-2 {
        inset: -30px;
        background: radial-gradient(
          circle,
          rgba(155, 123, 222, 0.12) 0%,
          rgba(155, 123, 222, 0.06) 35%,
          transparent 65%
        );
        animation: pulse-ring-2 4s ease-in-out infinite 0.5s;
      }

      /* Hover enhancement på rings */
      .logo-container:hover .glow-ring-1 {
        opacity: 0.8;
        animation-duration: 2s;
      }

      .logo-container:hover .glow-ring-2 {
        opacity: 0.7;
        animation-duration: 2.5s;
      }

      /* Keyframe animasjoner */
      @keyframes pulse-ring-1 {
        0%,
        100% {
          transform: scale(1);
          opacity: 0.6;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.8;
        }
      }

      @keyframes pulse-ring-2 {
        0%,
        100% {
          transform: scale(1);
          opacity: 0.4;
        }
        50% {
          transform: scale(1.15);
          opacity: 0.6;
        }
      }

      /* Subtle background halo - større og mer intense */
      .logo-container::before {
        content: '';
        position: absolute;
        inset: -25px -30px;
        border-radius: 50%;
        background: radial-gradient(
          ellipse 120% 100% at 50% 50%,
          rgba(79, 217, 217, 0.12) 0%,
          rgba(155, 123, 222, 0.08) 40%,
          rgba(245, 197, 99, 0.04) 70%,
          transparent 100%
        );
        filter: blur(15px);
        z-index: -1;
        transition: all 0.4s ease;
      }

      .logo-container:hover::before {
        background: radial-gradient(
          ellipse 140% 120% at 50% 50%,
          rgba(79, 217, 217, 0.18) 0%,
          rgba(155, 123, 222, 0.12) 40%,
          rgba(245, 197, 99, 0.08) 70%,
          transparent 100%
        );
        filter: blur(20px);
      }

      /* Focus state for accessibility */
      .logo-container:focus-visible {
        outline: none;
      }

      .logo-container:focus-visible .mag-logo {
        filter: drop-shadow(0 16px 40px rgba(0, 0, 0, 0.6))
          drop-shadow(0 0 50px rgba(79, 217, 217, 0.7))
          drop-shadow(0 0 70px rgba(155, 123, 222, 0.5))
          drop-shadow(0 0 4px rgba(255, 255, 255, 0.8));
      }

      /* Respekt for redusert bevegelse */
      @media (prefers-reduced-motion: reduce) {
        .mag-logo,
        .logo-container::before,
        .glow-ring-1,
        .glow-ring-2 {
          transition: none !important;
          animation: none !important;
        }
      }

      /* Mobile optimalisering */
      @media (max-width: 640px) {
        .glow-ring-1,
        .glow-ring-2 {
          inset: -15px;
        }

        .glow-ring-2 {
          inset: -20px;
        }

        .logo-container::before {
          inset: -20px -25px;
          filter: blur(12px);
        }
      }
    `,
  ],
})
export class StepHeaderComponent {}
