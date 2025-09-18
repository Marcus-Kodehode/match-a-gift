// src/app/pages/wizard/result.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftCardComponent } from '../../ui/gift-card';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, GiftCardComponent],
  templateUrl: './result.html',
})
export class ResultComponent {
  state = history.state; // { occasion, gender, ageRange }
  // midlertidig dummy-liste – vi fyller SuggestionService senere
  items = [
    { id: 'demo1', title: 'Smartwatch', price: 1990, tags: ['tech'] },
    { id: 'demo2', title: 'Home brewing kit', price: 899, tags: ['hobby'] },
    { id: 'demo3', title: 'Wireless charger', price: 399, tags: ['tech'] },
  ];
}
