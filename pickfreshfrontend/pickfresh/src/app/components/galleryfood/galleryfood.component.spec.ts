import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryfoodComponent } from './galleryfood.component';

describe('GalleryfoodComponent', () => {
  let component: GalleryfoodComponent;
  let fixture: ComponentFixture<GalleryfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
