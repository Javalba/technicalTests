import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(
    public session: SessionService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.session.logout();
  }

  // method to check if a user is logged in
  checkUser() {
    return this.session.checkUser();
  }

}
