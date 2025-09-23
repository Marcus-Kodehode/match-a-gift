// src/app/pages/wizard/gender.ts
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { StepHeaderComponent } from '../../ui/step-header';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [CommonModule, StepHeaderComponent],
  templateUrl: './gender.html',
})
export class GenderComponent {
  occasion: any = null;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    // Kun les history når vi er i nettleseren
    if (isPlatformBrowser(this.platformId)) {
      this.occasion = history.state?.occasion;
    }
  }

  pick(g: string) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.navigate(['/age'], { state: { ...history.state, gender: g } });
    } else {
      // Fallback for SSR
      this.router.navigate(['/age'], { state: { occasion: this.occasion, gender: g } });
    }
  }
}
