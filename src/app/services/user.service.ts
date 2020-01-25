import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(payload: any): Observable<User> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': payload.token
      })
    };
    return this.http.get<any>('api/user', requestOptions);
  }

  updateUser(payload: any): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': payload.token
      })
    };
    return this.http.post<any>('api/update-user', payload, requestOptions)
  }
}
