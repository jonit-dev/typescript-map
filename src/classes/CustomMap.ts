import { DEFAULT_LOCATION } from '../constants/map.constant';
import { IMappable } from '../types/Map.types';




export class CustomMap {
  private _googleMap: google.maps.Map;

  constructor(mapDivId: string) {
    const mapDiv = document.querySelector(mapDivId)
    this._googleMap = new google.maps.Map(mapDiv, {
      zoom: 13,
      center: DEFAULT_LOCATION
    })
  }

  public addMaker(mappable: IMappable): void {

    const typeAlias = mappable.constructor.name;

    console.log(`Adding a marker for ${typeAlias}`);

    const marker = new google.maps.Marker({
      map: this._googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
 
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })
      infoWindow.open(this._googleMap, marker)
    })

  }

}