import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TradelogService {
  body: any;

  constructor(private http:Http) { }

  log(body){
    return this.http.post('https://dbbackendhere.herokuapp.com/file',body)
      .pipe(map(res => res.json()));
        //  .subscribe((data:any)=>console.log(JSON.stringify(data.json)));
     
  }
}