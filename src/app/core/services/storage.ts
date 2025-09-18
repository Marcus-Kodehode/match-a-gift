import { Injectable, signal } from '@angular/core';
import { GiftIdea } from '../../types/models';
const KEY = 'gift-favs';
@Injectable({ providedIn: 'root' })
export class StorageService {
  favorites = signal<GiftIdea[]>([]);
  toggle(item: GiftIdea) {
    const cur = this.favorites();
    const ex = cur.find((g) => g.id === item.id);
    const next = ex ? cur.filter((g) => g.id !== item.id) : [...cur, item];
    this.favorites.set(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {}
  }
}
