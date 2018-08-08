import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})

export class DetailComponent {

  places: any = [
    {
      id: 1,
      active: false,
      closeness: 1,
      description: 'Floreria la Gardenia',
      distance: 1,
      name: 'Floreria la Gardenia',
      plan: 'premium'
    },
    {
      id: 2,
      active: true,
      closeness: 2,
      description: 'Donas DunkiDonuts',
      distance: 1.8,
      name: 'Donas DunkiDonuts',
      plan: 'free'
    },
    {
      id: 3,
      active: true,
      closeness: 1,
      description: 'Veterinaria Camila y Hachi',
      distance: 5,
      name: 'Veterinaria Camila y Hachi',
      plan: 'premium'
    },
    {
      id: 4,
      active: false,
      closeness: 3,
      description: 'Panda Express',
      distance: 10,
      name: 'Panda Express',
      plan: 'free'
    },
    {
      id: 5,
      active: true,
      closeness: 2,
      description: 'Supermarket Safeway',
      distance: 35,
      name: 'Supermarket Safeway',
      plan: 'premium'
    },
    {
      id: 6,
      active: false,
      closeness: 1,
      description: 'Convenience store Ikea',
      distance: 120,
      name: 'Convenience store Ikea',
      plan: 'free'
    }
  ];

  id = null;
  place: any = {};

  constructor (private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.place = this.searchPlace();
  }

  searchPlace() {
    return this.places.find(({ id }) => id == this.id);
  }
}
