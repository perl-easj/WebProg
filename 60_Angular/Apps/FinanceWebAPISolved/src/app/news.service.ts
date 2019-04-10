import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { News } from './News';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpService: HttpClient) { }

  public getNewsList(): Observable<News[]> {
    return this.httpService.get<News[]>('https://api.iextrading.com/1.0/stock/market/news/last/5');
  }  
}
