import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegkitsComponent } from './vegkits.component';

describe('VegkitsComponent', () => {
  let component: VegkitsComponent;
  let fixture: ComponentFixture<VegkitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegkitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegkitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
