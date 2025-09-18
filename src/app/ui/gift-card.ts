import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { GiftIdea } from '../types/models';

@Component({
  selector: 'app-gift-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gift-card">
      <div class="gift-thumb"></div>
      <div>
        <div class="gift-title">{{ item?.title || 'Gift' }}</div>
        <div class="gift-tags">
          <span class="badge" *ngFor="let t of item?.tags || []">{{ t }}</span>
        </div>
        <div class="price" *ngIf="item?.price">ca. {{ item?.price | currency : 'NOK' }}</div>
        <button class="btn btn-sm mt-3" (click)="toggleFav.emit()">Favoritt</button>
      </div>
    </div>
  `,
})
export class GiftCardComponent {
  @Input() item!: GiftIdea;
  @Output() toggleFav = new EventEmitter<void>();
}
