import { ItineraryEvent } from './../itinerary-event/itinerary-event';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class ItineraryComponent implements OnInit {
  date: Date | undefined;
  events: ItineraryEvent[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  newEvent(): void {
    this.events.push({} as ItineraryEvent);
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };
}
