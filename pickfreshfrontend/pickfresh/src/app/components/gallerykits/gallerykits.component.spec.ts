import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerykitsComponent } from './gallerykits.component';

describe('GallerykitsComponent', () => {
  let component: GallerykitsComponent;
  let fixture: ComponentFixture<GallerykitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerykitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerykitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
