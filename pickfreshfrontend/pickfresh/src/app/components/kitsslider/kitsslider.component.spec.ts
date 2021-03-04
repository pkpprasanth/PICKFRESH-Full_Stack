import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitssliderComponent } from './kitsslider.component';

describe('KitssliderComponent', () => {
  let component: KitssliderComponent;
  let fixture: ComponentFixture<KitssliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitssliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitssliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
