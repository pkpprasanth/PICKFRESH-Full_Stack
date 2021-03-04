import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerycropComponent } from './gallerycrop.component';

describe('GallerycropComponent', () => {
  let component: GallerycropComponent;
  let fixture: ComponentFixture<GallerycropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerycropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerycropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
