export interface ItineraryEvent {
  name: string;
  id: number;
  location?: string;
  start_time?: Date;
  end_time?: Date;
  description?: string;
}
