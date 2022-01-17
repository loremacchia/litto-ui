import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-tabs',
  templateUrl: './footer-tabs.component.html',
  styleUrls: ['./footer-tabs.component.css']
})
export class FooterTabsComponent implements OnInit {
  @Input() index! : number;
  @Input() id! : number;
  constructor() { }

  ngOnInit(): void {
  }

}
