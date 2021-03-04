import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddetailsComponent } from './fooddetails.component';

describe('FooddetailsComponent', () => {
  let component: FooddetailsComponent;
  let fixture: ComponentFixture<FooddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
