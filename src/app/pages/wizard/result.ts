import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GiftCardComponent } from '../../ui/gift-card';
import type { GiftIdea, AgeRange, Gender, Occasion } from '../../types/models';
import { SuggestionService } from '../../core/services/suggestion';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, GiftCardComponent],
  templateUrl: './result.html',
})
export class ResultComponent {
  constructor(private router: Router, private sugg: SuggestionService) {}

  state = history.state as { occasion?: Occasion; gender?: Gender; ageRange?: AgeRange };

  items: GiftIdea[] = [];

  ngOnInit() {
    const { occasion, gender, ageRange } = this.state;
    if (!occasion) {
      this.restart();
      return;
    }
    this.items = this.sugg.suggest({ occasion, recipient: { gender, ageRange } }, 10);
  }

  restart() {
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
