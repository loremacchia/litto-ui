import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPlanDateComponent } from './start-plan-date.component';

describe('StartPlanDateComponent', () => {
  let component: StartPlanDateComponent;
  let fixture: ComponentFixture<StartPlanDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPlanDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPlanDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
