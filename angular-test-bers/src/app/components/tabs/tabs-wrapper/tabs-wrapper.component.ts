import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-wrapper',
  templateUrl: './tabs-wrapper.component.html',
  styleUrls: ['./tabs-wrapper.component.css']
})
export class TabsWrapperComponent implements OnInit {

  flag: any;

  constructor() { }

  ngOnInit() {
    this.flag = true;
  }

}
