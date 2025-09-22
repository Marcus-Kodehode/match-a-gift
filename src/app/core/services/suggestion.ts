import { Injectable } from '@angular/core';
import { GIFT_CATALOG } from '../../data/gifts';
import { GiftIdea, SuggestionInput } from '../../types/models';

@Injectable({ providedIn: 'root' })
export class SuggestionService {
  suggest(input: SuggestionInput, limit = 10): GiftIdea[] {
    const { occasion, recipient } = input;
    const age = recipient.ageRange;
    const gender = recipient.gender;

    // Filtrer ut de som i det minste matcher occasion
    const candidates = GIFT_CATALOG.filter((g) => g.suitability.occasions.includes(occasion));

    // Score: occasion (2p, implicit), gender (1p), age (1p)
    const scored = candidates.map((g) => {
      let score = 2;

      if (!g.suitability.genders || (gender && g.suitability.genders.includes(gender))) {
        score += 1;
      }
      if (!g.suitability.ages || (age && g.suitability.ages.includes(age))) {
        score += 1;
      }

      return { g, score };
    });

    // Sorter på score desc, deretter litt billigere først (mer “vennlig” default)
    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const pa = a.g.price ?? Number.MAX_SAFE_INTEGER;
      const pb = b.g.price ?? Number.MAX_SAFE_INTEGER;
      return pa - pb;
    });

    return scored.slice(0, limit).map((s) => s.g);
  }
}
