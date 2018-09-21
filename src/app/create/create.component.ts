import { Component } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})

export class CreateComponent {
  place: any = {};

  constructor(private placesService: PlacesService) {

  }

  savePlace() {
    this.placesService.savePlace(this.place);
  }
}
