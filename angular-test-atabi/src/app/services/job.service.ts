import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SessionService } from './session.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class JobService {

  private BASE_URL: string = environment.baseAPI; //https://staging.api.wurcly.com/v1
  constructor(private http: Http, private session: SessionService) { }

  //List all jobs
  getAllJobs() {
    console.log(this.session.key);

  	let headers = new Headers({ 'Authorization': 'Bearer ' + this.session.key });
    let options = new RequestOptions({ headers: headers });

    console.log("headers");
    console.log(headers);

    console.log("options");
    console.log(options);

  	return this.http.get(`${this.BASE_URL}/jobs`, options)
      .map((res) => res.json() )
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
