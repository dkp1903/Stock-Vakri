import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
// import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url:String ="https://dbbackendhere.herokuapp.com/dashboard/getClients/"
  client: any;
  authToken: any;

  constructor(
    private http: Http,
    // private http2: HttpClient,
    private authService: AuthService,
    ) { }

    getClient(){
     let user=JSON.parse(localStorage.getItem('user')).username;
      console.log(user);
      this.authToken = this.authService.loadToken();

      let headers = new Headers();
      headers.append('Authorization',this.authToken);
      headers.append('Content-Type','application/json');

      return this.http.get(this.url + user,{ headers: headers})
      .pipe(map(res => res.json()));
   }

   addClient(client){
    let headers = new Headers();
    this.authToken = this.authService.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.post('https://dbbackendhere.herokuapp.com/dashboard/addClient', client,{headers: headers})
      .pipe(map(res => res.json()));
  }
}
