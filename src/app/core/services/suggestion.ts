// src/app/core/services/suggestion.ts
import { Injectable } from '@angular/core';
import { GIFT_CATALOG } from '../../data/gifts';
import type { GiftIdea, Occasion, Gender, AgeRange } from '../../types/models';

@Injectable({ providedIn: 'root' })
export class SuggestionService {
  suggest(
    query: { occasion: Occasion; recipient?: { gender?: Gender; ageRange?: AgeRange } },
    limit: number = 10
  ): GiftIdea[] {
    const { occasion, recipient } = query;

    // ---- spesialtilfeller ----
    if (occasion === 'mothersday' && recipient?.gender === 'male') {
      return [
        {
          id: 'err-md',
          title: 'Mother’s Day gifts are for women – please pick another occasion',
          price: undefined as any,
          tags: ['info'],
          image: '',
          suitability: { occasions: ['mothersday'] },
        },
      ];
    }

    if (occasion === 'fathersday' && recipient?.gender === 'female') {
      return [
        {
          id: 'err-fd',
          title: 'Father’s Day gifts are for men – please pick another occasion',
          price: undefined as any,
          tags: ['info'],
          image: '',
          suitability: { occasions: ['fathersday'] },
        },
      ];
    }

    // ---- normal filtrering ----
    return GIFT_CATALOG.filter((g) => g.suitability.occasions?.includes(occasion)).slice(0, limit);
  }
}
