import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { CountCicksDirective } from './directives/count-clicks.directive';
import { RemarkDirective } from './directives/remark.directive';
import { Routing } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { PlaceComponent } from './place/place.component';

import { PlacesService } from './services/places.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const firebaseConfig = {
  apiKey: 'YOUR_KEY',
  authDomain: 'YOUR_DOMAIN',
  databaseURL: 'YOUR_URL',
  storageBucket: 'YOUR_BUCKET',
  messagingSenderId: 'YOUR_SENDER_ID'
};

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CreateComponent,
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
    Routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    PlacesService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
