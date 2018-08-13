import { Component } from '@angular/core';
import { PlacesService } from './../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})

export class PlaceComponent {
  title = 'PlatziSquare';
  lat: Number = 37.757815;
  lng: Number = -122.5076404;
  places: any = null;

  constructor(private placesService: PlacesService) {
    this.places = placesService.getPlaces();
  }
}
