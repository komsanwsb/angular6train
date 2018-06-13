import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicenameService {

  constructor(private _http:  Http) { }

  loadProject(): Observable < any [] > {
        return this._http.get(`${environment.API_URL}/api/v1/project` ) .pipe( map( (resp) => {
      return resp.json();
    })).pipe(catchError( value => Observable.throw(value)));
  }

  doLogin(user): Observable < any [] > {
    const body = {
      'userCode': user.userId,
      'userPwd' : user.password
    };
    return this._http.post(`${environment.API_URL}/api/v1/login/doLogin` , body ).pipe( map( (resp) => {
      return resp.json();
    }));
  }
}
