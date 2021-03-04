import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegkitsComponent } from './nonvegkits.component';

describe('NonvegkitsComponent', () => {
  let component: NonvegkitsComponent;
  let fixture: ComponentFixture<NonvegkitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonvegkitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonvegkitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
