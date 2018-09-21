import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class PlacesService {
  places: any = [
    {
      id: 1,
      active: false,
      closeness: 1,
      distance: 1,
      name: 'Floreria la Gardenia',
      plan: 'premium'
    },
    {
      id: 2,
      active: true,
      closeness: 2,
      distance: 1.8,
      name: 'Donas DunkiDonuts',
      plan: 'free'
    },
    {
      id: 3,
      active: true,
      closeness: 1,
      distance: 5,
      name: 'Veterinaria Camila y Hachi',
      plan: 'premium'
    },
    {
      id: 4,
      active: false,
      closeness: 3,
      distance: 10,
      name: 'Panda Express',
      plan: 'free'
    },
    {
      id: 5,
      active: true,
      closeness: 2,
      distance: 35,
      name: 'Supermarket Safeway',
      plan: 'premium'
    },
    {
      id: 6,
      active: false,
      closeness: 1,
      distance: 120,
      name: 'Convenience store Ikea',
      plan: 'free'
    }
  ];

  constructor(private afDB: AngularFireDatabase) {}

  public getPlaces() {
    return this.places;
  }

  public searchPlace(id) {
    return this.places.filter((place) => place.id == id )[0] || null;
  }
  public savePlace(place) {
    console.log(place);
    this.afDB.database.ref('places/1').set(place);
  }

}
