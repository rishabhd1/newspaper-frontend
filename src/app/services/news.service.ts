import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AllNews } from '../models/AllNews';
import { apiURL } from '../helper/constants';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getAllNews(): Observable<AllNews> {
    return this.http.get<AllNews>(`${apiURL}api/all-news`);
  }

  getBusinessNews(): Observable<AllNews> {
    return this.http.get<AllNews>(`${apiURL}api/business-news`);
  }

  getSportsNews(): Observable<AllNews> {
    return this.http.get<AllNews>(`${apiURL}api/sports-news`);
  }

  getEntertainmentNews(): Observable<AllNews> {
    return this.http.get<AllNews>(`${apiURL}api/entertainment-news`);
  }

  increamentClickCount(id: string): Observable<any> {
    return this.http.get<any>(`${apiURL}api/click-count/${id}`);
  }

  getMostViewedNews(): Observable<AllNews> {
    return this.http.get<AllNews>(`${apiURL}api/most-viewed-news`);
  }

  getSavedNewsDetails(payload: any): Observable<AllNews> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': payload.token
      })
    };
    return this.http.get<AllNews>(`${apiURL}api/get-saved-news-details`, requestOptions);
  }

  saveNews(payload: any): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': payload.token
      })
    };
    return this.http.get<any>(`${apiURL}api/save-news/${payload.mongoID}`, requestOptions);
  }

  getSavedNews(payload: any): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': payload.token
      })
    };
    return this.http.get<any>(`${apiURL}api/saved-news`, requestOptions);
  }

  removeNews(payload: any): Observable<any> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Auth-Token': payload.token
      })
    };
    return this.http.get<any>(`${apiURL}api/remove-news/${payload.mongoID}`, requestOptions);
  }
}
