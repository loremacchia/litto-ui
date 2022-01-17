import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInterestsComponent } from './display-interests.component';

describe('DisplayInterestsComponent', () => {
  let component: DisplayInterestsComponent;
  let fixture: ComponentFixture<DisplayInterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayInterestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
