import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})

export class PlaceComponent {
  title = 'PlatziSquare';
  places: any = [
    {
      active: false,
      closeness: 1,
      distance: 1,
      name: 'Floreria la Gardenia',
      plan: 'premium'
    },
    {
      active: true,
      closeness: 2,
      distance: 1.8,
      name: 'Donas DunkiDonuts',
      plan: 'free'
    },
    {
      active: true,
      closeness: 1,
      distance: 5,
      name: 'Veterinaria Camila y Hachi',
      plan: 'premium'
    },
    {
      active: false,
      closeness: 3,
      distance: 10,
      name: 'Panda Express',
      plan: 'free'
    },
    {
      active: true,
      closeness: 2,
      distance: 35,
      name: 'Supermarket Safeway',
      plan: 'premium'
    },
    {
      active: false,
      closeness: 1,
      distance: 120,
      name: 'Convenience store Ikea',
      plan: 'free'
    }
  ];
  lat: Number = 37.757815;
  lng: Number = -122.5076404;

  constructor() {}
}
