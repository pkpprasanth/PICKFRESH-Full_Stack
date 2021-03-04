import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopnavbarComponent } from './shopnavbar.component';

describe('ShopnavbarComponent', () => {
  let component: ShopnavbarComponent;
  let fixture: ComponentFixture<ShopnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
