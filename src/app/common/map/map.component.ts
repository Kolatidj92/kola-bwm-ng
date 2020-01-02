import { MapService } from "./map.service";
import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "bwm-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  @Input() location: string;
  isPositionError: boolean = false;

  lat: number;
  lng: number;

  constructor(private mapService: MapService, private ref: ChangeDetectorRef) {}

  ngOnInit() {}

  mapReadyHandler() {
    /* let currentLocation = this.location; 
    if (Math.round(Math.random() * 10) > 5) {
        currentLocation = "sadad78asd6a87d"
    }*/
    this.mapService.getGeoLocation(this.location).subscribe(
      coordinates => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;

        this.ref.detectChanges();
      },
      () => {
        this.isPositionError = true;
      }
    );
  }
}
