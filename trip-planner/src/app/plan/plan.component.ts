import { Itinerary } from './../itinerary/itinerary';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  itineraries: Itinerary[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getItineraries();
  }

  // getItineraries(): void {
  //   // todo
  // service subscribe return
  // }

  getItineraries(): Itinerary []{
    return [];
  }

  newItinerary(): void {
    this.itineraries.push({
      id: this.itineraries.length+1,
      name: "new itinerary"
    } as Itinerary);
  }
}
