// src/app/pages/wizard/gender.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StepHeaderComponent } from '../../ui/step-header';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [CommonModule, StepHeaderComponent],
  templateUrl: './gender.html',
})
export class GenderComponent {
  occasion = history.state?.occasion;
  constructor(private router: Router) {}
  pick(g: string) {
    this.router.navigate(['/age'], { state: { ...history.state, gender: g } });
  }
}
