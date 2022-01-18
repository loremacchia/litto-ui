import { Step } from './../../../model/Step';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-steps',
  templateUrl: './slider-steps.component.html',
  styleUrls: ['./slider-steps.component.css'],
})
export class SliderStepsComponent implements OnInit {
  @Input() step!: Step;

  constructor() {}

  ngOnInit(): void {}
}
