// src/app/app.routes.ts
import { Routes } from '@angular/router';

import { OccasionComponent } from './pages/wizard/occasion';
import { GenderComponent } from './pages/wizard/gender';
import { AgeComponent } from './pages/wizard/age';
import { ResultComponent } from './pages/wizard/result';
import { FavoritesComponent } from './pages/favorites';

export const routes: Routes = [
  { path: '', component: OccasionComponent },
  { path: 'gender', component: GenderComponent },
  { path: 'age', component: AgeComponent },
  { path: 'result', component: ResultComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', redirectTo: '' },
];
