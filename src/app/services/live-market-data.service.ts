import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class LiveMarketDataService {
  constructor(private httpclient: HttpClient) {}
    stockLiveData(symbol) {
        const params = new HttpParams({
        fromObject: {
          'function': 'TIME_SERIES_INTRADAY',
          "symbol": symbol,
          'interval': '30min',
          "apikey": 'Y3G8D0UA5FEKBJMA',
          // Another API Key : 421KN1U6YLBFSGR4
        }
      });
        return this.httpclient.get('https://www.alphavantage.co/query', {params}).pipe(map(result => result));
  }

}
