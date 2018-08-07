import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { CountCicksDirective } from './directives/count-clicks.directive';
import { RemarkDirective } from './directives/remark.directive';
import { Routing } from './app-routing.module';
import { RouterModule } from '../../node_modules/@angular/router';
import { DetailComponent } from './detail/detail.component';
import { PlaceComponent } from './place/place.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    PlaceComponent,
    RemarkDirective,
    CountCicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    }),
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
