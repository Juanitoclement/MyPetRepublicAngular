import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequesthttpService {

  constructor(private http: HttpClient) {}

  post(url, body, httpOptions) {
    return this.http.post<any>(url, body, httpOptions);
  }
  get(url) {
    return this.http.get<any>(url);
  }
}
