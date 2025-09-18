import { Injectable } from '@angular/core';
import { SuggestionInput, GiftIdea } from '../../types/models';
@Injectable({ providedIn: 'root' })
export class SuggestionService {
  suggest(_input: SuggestionInput): GiftIdea[] {
    return [];
  }
}
