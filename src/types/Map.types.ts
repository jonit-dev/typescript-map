

// Mappable is a "gatekeeper" that make sure that the class that's using it can be passed to CustomMap.addMarker()
export interface IMappable {
  location: {
    lat: number;
    lng: number;
  },
  markerContent(): string;
  color: string;
}