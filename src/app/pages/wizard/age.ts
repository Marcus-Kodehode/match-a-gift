// src/app/pages/wizard/age.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StepHeaderComponent } from '../../ui/step-header';

@Component({
  selector: 'app-age',
  standalone: true,
  imports: [CommonModule, StepHeaderComponent],
  templateUrl: './age.html',
})
export class AgeComponent {
  constructor(private router: Router) {}
  pick(a: string) {
    this.router.navigate(['/result'], { state: { ...history.state, ageRange: a } });
  }
}
