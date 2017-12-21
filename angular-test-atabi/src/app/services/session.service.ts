import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class SessionService {

  /* 	public token: string = ''; */
  public key: string = '';
  public isAuth: boolean = false;
  public user = {};

  private BASE_URL: string = 'https://staging.api.wurcly.com/v1';

  constructor(
    private http: Http,
    private router: Router
  ) {}

  login(user) {
    console.log("HOLA");
    console.log(user);


    return this.http.post(`${this.BASE_URL}/login`, user)
      .map((res) => res.json())
      .map((res) => {
        console.log("LLEGA AQUI");

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

}

