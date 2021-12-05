export interface ItineraryEvent {
  name: string;
  number: number;
  location?: string;
  start_time?: Date;
  end_time?: Date;
  description?: string;
}
