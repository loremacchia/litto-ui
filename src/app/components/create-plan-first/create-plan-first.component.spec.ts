import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanFirstComponent } from './create-plan-first.component';

describe('CreatePlanFirstComponent', () => {
  let component: CreatePlanFirstComponent;
  let fixture: ComponentFixture<CreatePlanFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePlanFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlanFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
