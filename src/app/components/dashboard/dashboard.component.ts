import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { TradelogService } from '../../services/tradelog.service';
import {Http, Headers} from '@angular/http';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  body:any;
  nameofuser:any;
  display: boolean;
  BrokerID: String;
  ClientID: String;
  ClientName: String;
  MobileNo: String; 
  flag={
    dash:'1',
    client:'0',
    logout:'0'
  };
  constructor(
    private http:Http,
    private clientService: ClientService,
    private flashMessage: FlashMessagesService,
    private tradelogService: TradelogService,
    private router: Router, 


  ){ }

  ngOnInit(): void {
    this.nameofuser = (JSON.parse(localStorage.getItem('user')).username).split('@')[0];
  }

  fileupload(files: FileList) {
    if (files && files.length > 0) {
      let file: File = files.item(0);
      let fileReader: FileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = ev => {
        let csvdata = fileReader.result.toString();
        this.body = {data:csvdata};
        console.log(this.body);
      };
    }
  }

  close() { 
    console.log('calling on close');
  }
 

  onTradeSubmit()
  {
    
    this.tradelogService.log(this.body).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Trade logged!', {cssClass: 'alert-success', timeout: 3000});
      } else {
        this.flashMessage.show('Something went wrong. Try again!', {cssClass: 'alert-danger', timeout: 3000});
      }
    })
    

  }

  onClientSubmit()
  {
   const client = {
    BrokerID: this.BrokerID,
    ClientID: this.ClientID,
    ClientName: this.ClientName,
    MobileNo: this.MobileNo    
    }

    this.clientService.addClient(client).subscribe(data => {
      if(data.success){
        this.display = !this.display;
        this.flashMessage.show('New client registered!', {cssClass: 'alert-success', timeout: 3000});
      } 
      else {
        this.flashMessage.show('Something went wrong. Try again!', {cssClass: 'alert-danger', timeout: 3000});
      }
    });


  }

}
