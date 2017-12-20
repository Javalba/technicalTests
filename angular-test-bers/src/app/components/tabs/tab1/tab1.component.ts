import { Component, OnInit } from '@angular/core';
import { TabService } from '../../../services/tab.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

  constructor(private tabAPI: TabService) { }

  ngOnInit() {
  }

  addQty() {this.tabAPI._value2++;}


}
