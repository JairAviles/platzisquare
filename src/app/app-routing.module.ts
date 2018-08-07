import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PlaceComponent } from './place/place.component';
import { DetailComponent } from './detail/detail.component';

const APP_ROUTES: Routes = [
  { path: '', component: PlaceComponent},
  { path: 'place', component: PlaceComponent},
  { path: 'detail', component: DetailComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);

