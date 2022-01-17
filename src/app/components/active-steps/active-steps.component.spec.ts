import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveStepsComponent } from './active-steps.component';

describe('ActiveStepsComponent', () => {
  let component: ActiveStepsComponent;
  let fixture: ComponentFixture<ActiveStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
