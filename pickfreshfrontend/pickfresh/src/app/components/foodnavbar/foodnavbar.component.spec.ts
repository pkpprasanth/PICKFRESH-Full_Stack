import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodnavbarComponent } from './foodnavbar.component';

describe('FoodnavbarComponent', () => {
  let component: FoodnavbarComponent;
  let fixture: ComponentFixture<FoodnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
