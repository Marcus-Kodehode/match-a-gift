import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StepHeaderComponent } from '../../ui/step-header';

type OccKey =
  | 'birthday'
  | 'anniversary'
  | 'graduation'
  | 'christmas'
  | 'valentine'
  | 'mothersday'
  | 'fathersday'
  | 'wedding'
  | 'babyshower'
  | 'housewarming'
  | 'retirement'
  | 'romantic';

@Component({
  selector: 'app-occasion',
  standalone: true,
  imports: [CommonModule, StepHeaderComponent],
  templateUrl: './occasion.html',
})
export class OccasionComponent {
  constructor(private router: Router) {}

  occasions: { key: OccKey; label: string }[] = [
    { key: 'birthday', label: 'Birthday' },
    { key: 'anniversary', label: 'Anniversary' },
    { key: 'graduation', label: 'Graduation' },
    { key: 'christmas', label: 'Christmas' },
    { key: 'valentine', label: 'Valentine’s Day' },
    { key: 'mothersday', label: 'Mother’s Day' },
    { key: 'fathersday', label: 'Father’s Day' },
    { key: 'wedding', label: 'Wedding' },
    { key: 'babyshower', label: 'Baby Shower' },
    { key: 'housewarming', label: 'Housewarming' },
    { key: 'retirement', label: 'Retirement' },
    { key: 'romantic', label: 'Romantic Gift' },
  ];

  pick(o: OccKey) {
    this.router.navigate(['/gender'], { state: { occasion: o } });
  }
}
