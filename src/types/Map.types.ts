
export interface ILocation {
  lat: number,
  lng: number
}

// Mappable is a "gatekeeper" that make sure that the class that's using it can be passed to CustomMap.addMarker()
export interface IMappable {
  location: ILocation,
  markerContent(): string;
  color: string;
}