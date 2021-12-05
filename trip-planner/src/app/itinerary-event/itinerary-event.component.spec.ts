import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryEventComponent } from './itinerary-event.component';

describe('ItineraryEventComponent', () => {
  let component: ItineraryEventComponent;
  let fixture: ComponentFixture<ItineraryEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItineraryEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
