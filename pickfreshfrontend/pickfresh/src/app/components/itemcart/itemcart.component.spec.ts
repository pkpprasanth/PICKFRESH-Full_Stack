import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcartComponent } from './itemcart.component';

describe('ItemcartComponent', () => {
  let component: ItemcartComponent;
  let fixture: ComponentFixture<ItemcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
