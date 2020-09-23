import faker from 'faker';

import { ILocation, IMappable } from './../types/Map.types';

export class Company implements IMappable {
  public companyName: string;
  public catchPhrase: string;
  public location: ILocation;
  public color: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: 49.22,
      lng: -122.93
    }
    this.color = "#dac753";
  }

  public markerContent(): string {
    return `<div>
      <strong>${this.companyName}</strong>: ${this.catchPhrase}
    </div>`
  }



}