import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { PlaceComponent } from './place/place.component';

const APP_ROUTES: Routes = [
  { path: '', component: PlaceComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'detail/:id', component: DetailComponent},
  { path: 'place', component: PlaceComponent},
];

export const Routing = RouterModule.forRoot(APP_ROUTES);

