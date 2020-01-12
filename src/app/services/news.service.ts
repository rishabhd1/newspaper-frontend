import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AllNews } from '../models/AllNews';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getAllNews(): Observable<AllNews> {
    return this.http.get<AllNews>('api/all-news');
  }

  getBusinessNews(): Observable<AllNews> {
    return this.http.get<AllNews>('api/business-news');
  }

  getSportsNews(): Observable<AllNews> {
    return this.http.get<AllNews>('api/sports-news');
  }

  getEntertainmentNews(): Observable<AllNews> {
    return this.http.get<AllNews>('api/entertainment-news');
  }
}
