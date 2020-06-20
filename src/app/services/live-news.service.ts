import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LiveNewsService {
  // NewsAPI key
  // key = '03db90899c064911aa9517883d5415bd';
  gNewsKey = '6eba733a185606dd81cb9cac7e45c520';
  // News API URL
  // newsApiUrl = 'https://newsapi.org/v2/everything?q=';
  gNewsUrl = 'https://gnews.io/api/v3/search?q=';


  constructor(private http: HttpClient) { }


  getNews(val){
    return this.http.get(this.gNewsUrl + val + '&token=' + this.gNewsKey);
  }
}
