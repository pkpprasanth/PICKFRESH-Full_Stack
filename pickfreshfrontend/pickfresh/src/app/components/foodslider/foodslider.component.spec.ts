import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsliderComponent } from './foodslider.component';

describe('FoodsliderComponent', () => {
  let component: FoodsliderComponent;
  let fixture: ComponentFixture<FoodsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
