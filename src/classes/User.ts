import faker from 'faker';

import { DEFAULT_LOCATION } from './../constants/map.constant';
import { ILocation, IMappable } from './../types/Map.types';

// "Implements" makes sure that User class complies with IMappable interface!
export class User implements IMappable {
  public name: string;
  public location: ILocation;
  public color: string;

  constructor() {
    this.name = faker.name.firstName();
    this.location = DEFAULT_LOCATION
    this.color = "#b32a9f"
  }

  public markerContent(): string {
    return `${this.name}`
  }
}