import { TabService } from './../../../services/tab.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {

  constructor(private tabAPI: TabService) { }

  ngOnInit() {}

  addQty() {
     this.tabAPI._value1++;
  }

}
