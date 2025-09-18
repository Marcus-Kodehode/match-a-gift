// src/app/pages/wizard/occasion.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { StepHeaderComponent } from '../../ui/step-header';

@Component({
  selector: 'app-occasion',
  standalone: true,
  imports: [CommonModule, RouterLink, StepHeaderComponent],
  templateUrl: './occasion.html',
})
export class OccasionComponent {
  constructor(private router: Router) {}
  pick(o: string) {
    this.router.navigate(['/gender'], { state: { occasion: o } });
  }
}
