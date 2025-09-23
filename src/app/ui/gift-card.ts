import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { GiftIdea } from '../types/models';

@Component({
  selector: 'app-gift-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gift-card group">
      <!-- Enhanced thumbnail med hover zoom -->
      <div class="gift-thumb overflow-hidden">
        <img
          *ngIf="item.image; else ph"
          [src]="item.image!"
          alt="{{ item.title }}"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <ng-template #ph>
          <div class="w-full h-full grid place-items-center text-xs opacity-40">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </ng-template>
      </div>

      <div class="flex flex-col justify-between h-full">
        <!-- Title med gradient -->
        <div>
          <h3 class="gift-title">{{ item.title || 'Gift' }}</h3>

          <!-- Tags med forbedret spacing -->
          <div class="gift-tags" *ngIf="item.tags && item.tags.length > 0">
            <span
              class="badge transition-colors hover:border-aurora-purple/50"
              *ngFor="let t of item.tags || []"
            >
              {{ t }}
            </span>
          </div>

          <!-- Pris med glow effekt -->
          <div class="price flex items-center gap-1.5" *ngIf="item.price != null">
            <svg class="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            ca. {{ item.price | currency : 'NOK' : 'symbol-narrow' : '1.0-0' }}
          </div>
        </div>

        <!-- Action buttons med forbedret layout -->
        <div class="flex gap-2 mt-3">
          <button
            class="btn btn-sm flex-1 group/btn"
            (click)="toggleFav.emit()"
            [attr.aria-label]="'Add ' + item.title + ' to favorites'"
          >
            <svg
              class="w-4 h-4 transition-transform group-hover/btn:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Favoritt
          </button>
          <a
            class="btn-outline btn-sm flex-1 text-center group/search"
            [href]="googleUrl(item.title)"
            target="_blank"
            rel="noopener"
            [attr.aria-label]="'Search for ' + item.title + ' on Google'"
          >
            <svg
              class="w-4 h-4 inline transition-transform group-hover/search:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      /* Custom hover effects for this component */
      .gift-card {
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }

      /* Subtle rotation on hover for playfulness */
      .gift-card:hover {
        transform: translateY(-3px) rotate(-0.5deg);
      }

      /* Badge hover effects */
      .badge {
        transition: all 0.2s ease;
        cursor: default;
      }

      .badge:hover {
        background: linear-gradient(
          135deg,
          rgba(79, 217, 217, 0.2) 0%,
          rgba(139, 154, 255, 0.15) 100%
        );
        transform: translateY(-1px);
      }

      /* Price styling enhancement */
      .price {
        font-variant-numeric: tabular-nums;
      }

      /* Accessibility focus styles */
      button:focus-visible,
      a:focus-visible {
        outline: 2px solid rgba(184, 164, 255, 0.6);
        outline-offset: 2px;
      }
    `,
  ],
})
export class GiftCardComponent {
  @Input() item!: GiftIdea;
  @Output() toggleFav = new EventEmitter<void>();

  googleUrl(title: string): string {
    return `https://www.google.com/search?q=${encodeURIComponent(title)}`;
  }
}
