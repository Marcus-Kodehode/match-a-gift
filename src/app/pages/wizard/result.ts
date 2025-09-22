// src/app/pages/wizard/result.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GiftCardComponent } from '../../ui/gift-card';
import type { GiftIdea } from '../../types/models';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, GiftCardComponent],
  templateUrl: './result.html',
})
export class ResultComponent {
  constructor(private router: Router) {}

  state = history.state;

  items: GiftIdea[] = [
    {
      id: 'demo1',
      title: 'Smartwatch',
      price: 1990,
      tags: ['tech'],
      image: '/assets/demo/watch.jpg',
    },
    {
      id: 'demo2',
      title: 'Home brewing kit',
      price: 899,
      tags: ['hobby'],
      image: '/assets/demo/brew.jpg',
    },
    {
      id: 'demo3',
      title: 'Wireless charger',
      price: 399,
      tags: ['tech'],
      image: '/assets/demo/charger.jpg',
    },
  ];

  restart() {
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
