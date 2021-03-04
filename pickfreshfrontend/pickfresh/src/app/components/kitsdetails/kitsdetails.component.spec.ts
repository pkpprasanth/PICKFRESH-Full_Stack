import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitsdetailsComponent } from './kitsdetails.component';

describe('KitsdetailsComponent', () => {
  let component: KitsdetailsComponent;
  let fixture: ComponentFixture<KitsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
