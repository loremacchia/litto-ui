import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderStepsComponent } from './slider-steps.component';

describe('SliderStepsComponent', () => {
  let component: SliderStepsComponent;
  let fixture: ComponentFixture<SliderStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
