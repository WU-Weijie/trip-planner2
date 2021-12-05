

export interface Itinerary {
  id: number;
  name: string;
  date?: Date;
  description?: string;
  hotel?: string;
  events?: Event[];
}
