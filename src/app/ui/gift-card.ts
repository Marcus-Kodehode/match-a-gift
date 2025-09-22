// src/app/ui/gift-card.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { GiftIdea } from '../types/models';

@Component({
  selector: 'app-gift-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gift-card">
      <div class="gift-thumb">
        <img
          *ngIf="item.image; else ph"
          [src]="item.image!"
          alt=""
          class="w-full h-full object-cover"
        />
        <ng-template #ph>
          <div class="w-full h-full grid place-items-center text-xs opacity-60">img</div>
        </ng-template>
      </div>

      <div>
        <div class="gift-title">{{ item.title || 'Gift' }}</div>

        <div class="gift-tags">
          <span class="badge" *ngFor="let t of item.tags || []">{{ t }}</span>
        </div>

        <div class="price" *ngIf="item.price != null">
          ca. {{ item.price | currency : 'NOK' : 'symbol-narrow' : '1.0-0' }}
        </div>

        <button class="btn btn-sm mt-3" (click)="toggleFav.emit()">Favoritt</button>
      </div>
    </div>
  `,
})
export class GiftCardComponent {
  @Input() item!: GiftIdea;
  @Output() toggleFav = new EventEmitter<void>();
}
