import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RequesthttpService } from './requesthttp.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'})
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private httprequest: RequesthttpService) {
  }

  // call function through requesthttpservice
  doLogin() {
    return this.httprequest.get('http://localhost:8000/api/user');
  }


}

