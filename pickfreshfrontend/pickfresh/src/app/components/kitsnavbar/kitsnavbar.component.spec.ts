import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitsnavbarComponent } from './kitsnavbar.component';

describe('KitsnavbarComponent', () => {
  let component: KitsnavbarComponent;
  let fixture: ComponentFixture<KitsnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitsnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
