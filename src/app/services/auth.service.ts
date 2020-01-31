import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiURL } from '../helper/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  sendOTP(payload: any): Observable<any> {
    return this.http.post<any>(`${apiURL}api/send-otp`, payload);
  }

  verify(payload: any): Observable<any> {
    return this.http.post<any>(`${apiURL}api/authenticate`, payload);
  }
}
