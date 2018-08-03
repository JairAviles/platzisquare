import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  places: any = [
    {
      active: true,
      name: 'Floreria la Gardenia'
    },
    {
      active: true,
      name: 'Donas DunkiDonuts'
    },
    {
      active: true,
      name: 'Veterinaria Camila y Hachi'
    },
    {
      active: false,
      name: 'Panda Express'
    },
    {
      active: true,
      name: 'Supermarket Safeway'
    },
    {
      active: true,
      name: 'Convience store Ikea'
    }
  ];
  lat: Number = 37.757815;
  lng: Number = -122.5076404;

  constructor() {}

}
