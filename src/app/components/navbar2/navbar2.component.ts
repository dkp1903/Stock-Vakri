import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  @Input() tab;
  //  {
  //   dash:'0',
  //   client:'0',
  //   logout:'0'
  // };
  constructor(
    private authService: AuthService,
    private router: Router, 
     ) { }

  ngOnInit(): void {
  }

  onLogoutClick():void{
    this.authService.logout();
    // this.flashMessage.show('You are logged out!', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['../dashboard']);
  }

  onClientsClick():void{
    this.router.navigate(['../dashboard/clients']);
  }

}