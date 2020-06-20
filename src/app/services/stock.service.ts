import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private url:String ="https://dbbackendhere.herokuapp.com/dashboard/getStocks/";
  // http://localhost:3000/dashboard/getStocks/
 //https://dbbackendhere.herokuapp.com/dashboard/getStocks/
  authToken: any;

  constructor(
    private http: Http,
    private authService: AuthService,
    ) { }
   getStocks(){
    let user=JSON.parse(localStorage.getItem('user')).username;
      console.log(user);
      this.authToken = this.authService.loadToken();
      let headers = new Headers();
      headers.append('Authorization',this.authToken);
      headers.append('Content-Type','application/json');
      return this.http.get(this.url + user, {headers: headers})
      .pipe(map(res => res.json()));
}

}
