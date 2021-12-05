import { ItineraryEvent } from './../itinerary-event/itinerary-event';

export interface Itinerary {
  id: number;
  name: string;
  date?: Date;
  description?: string;
  hotel?: string;
  events?: ItineraryEvent[];
}
