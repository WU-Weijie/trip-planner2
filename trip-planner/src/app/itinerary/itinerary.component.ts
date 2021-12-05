import { ItineraryEvent } from './../itinerary-event/itinerary-event';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {
  date: Date | undefined;
  events: ItineraryEvent[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
