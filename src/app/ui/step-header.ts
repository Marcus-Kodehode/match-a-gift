import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="progress-wrap">
      <div class="progress-rail">
        <div class="progress-bar" [style.--p]="progress"></div>
      </div>
      <h1 class="title mt-6">{{ title }}</h1>
    </div>
  `,
})
export class StepHeaderComponent {
  @Input() title = '';
  /** f.eks. "33%" */
  @Input() progress = '0%';
}
