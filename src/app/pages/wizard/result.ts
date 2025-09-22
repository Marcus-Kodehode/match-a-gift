import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { GiftCardComponent } from '../../ui/gift-card';
import { SuggestionService } from '../../core/services/suggestion';
import type { GiftIdea, AgeRange, Gender, Occasion } from '../../types/models';

type NavState = { occasion?: Occasion; gender?: Gender; ageRange?: AgeRange };

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, GiftCardComponent],
  templateUrl: './result.html',
})
export class ResultComponent {
  constructor(
    private router: Router,
    private sugg: SuggestionService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // må være PUBLIC for at template skal få lese den
  readonly pageSize = 6;

  errorMsg: string | null = null;

  // paging
  private currentPage = 0;
  allItems: GiftIdea[] = [];
  items: GiftIdea[] = [];

  private readState(): NavState {
    // 1) fra navigasjonen
    const fromNav = this.router.getCurrentNavigation()?.extras?.state as NavState | undefined;
    // 2) fallback: window.history.state – KUN i browser
    const fromHist = isPlatformBrowser(this.platformId)
      ? (window.history.state as NavState) ?? undefined
      : undefined;
    return fromNav ?? fromHist ?? {};
  }

  ngOnInit() {
    const { occasion, gender, ageRange } = this.readState();

    if (!occasion) {
      this.restart();
      return;
    }

    // kjønnsregler
    if (occasion === 'mothersday' && gender === 'male') {
      this.errorMsg = 'Mother’s Day is typically for women. Please pick another occasion.';
      return;
    }
    if (occasion === 'fathersday' && gender === 'female') {
      this.errorMsg = 'Father’s Day is typically for men. Please pick another occasion.';
      return;
    }

    // hent, shuffle, paginer
    const raw = this.sugg.suggest({ occasion, recipient: { gender, ageRange } }, 200);
    this.allItems = this.shuffle([...raw]);
    this.currentPage = 0;
    this.applyPage();
  }

  private shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  private applyPage() {
    const start = this.currentPage * this.pageSize;
    if (start >= this.allItems.length) this.currentPage = 0; // wrap
    const s = this.currentPage * this.pageSize;
    this.items = this.allItems.slice(s, s + this.pageSize);
  }

  showNext() {
    this.currentPage++;
    this.applyPage();
  }
  showPrev() {
    const pages = Math.max(1, Math.ceil(this.allItems.length / this.pageSize));
    this.currentPage = (this.currentPage - 1 + pages) % pages;
    this.applyPage();
  }

  // hvis du fortsatt har (click)="showMore()" i HTML, behold aliaset:
  showMore() {
    this.showNext();
  }

  restart() {
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
