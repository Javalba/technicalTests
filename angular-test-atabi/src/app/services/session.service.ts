import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class SessionService {

  /* 	public token: string = ''; */
  public key: string = '';
  public isAuth: boolean = false;
  public user = {};

  private BASE_URL: string = environment.baseAPI;

  constructor(
    private http: Http,
    private router: Router
  ) {}

	checkUser() {
    return localStorage.getItem('user');
   }


  //To control only who have key can access to jobs view
  canActivate() {
  	if (localStorage.getItem('key')) {
      this.isAuth = true;
      this.key = localStorage.getItem('key');
      return true;
  	}else{
  		this.logout();
  		return false
  	}
  }


  //Login
  login(user) {
    return this.http.post(`${this.BASE_URL}/login`, user)
      .map((res) => res.json())
      .map((res) => {
        let user_id = res.user_id;
        let email = res.email;
        let key = res.key;
        let account = res.account;

        //let user = res.user;

        if (key) {
          this.key = key;
          this.user = {
            user_id: user_id,
            email: email,
            key: key,
            account: account
          };
          this.isAuth = true;
          // store email and key in local storage to keep user logged in between page refreshes
          localStorage.setItem('key', key);
          localStorage.setItem('user', JSON.stringify(this.user));

          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      })
  }

  //logout session
  logout() {
  	this.key = null;
  	this.user = null;
  	this.isAuth = false;
  	localStorage.removeItem('key');
  	localStorage.removeItem('user');
  	this.router.navigate(['/login']);
  }

}

