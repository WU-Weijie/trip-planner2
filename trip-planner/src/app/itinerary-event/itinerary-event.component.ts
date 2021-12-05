import { Component, OnInit } from '@angular/core';
import { ItineraryEvent } from './itinerary-event';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-itinerary-event',
  templateUrl: './itinerary-event.component.html',
  styleUrls: ['./itinerary-event.component.scss']
})
export class ItineraryEventComponent implements OnInit {
  id: number | undefined;
  // name: string | undefined;
  name: string | undefined;
  event: ItineraryEvent | undefined;
  time:string | undefined;


  constructor() { }

  ngOnInit(): void {
    this.setDefaultValues();
  }

  setDefaultValues(): void {
    this.id = 0;
    this.name = "New event";
    this.event = {
      name: this.name,
      id: this.id++
    };
    this.time = "00:00";
  }

  test () {
    console.log(this.name)
  }

  saveEvent():void {
    console.log(this.time);
  }

}
