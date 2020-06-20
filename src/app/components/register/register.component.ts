import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
// import { NgFlashMessageService } from 'ng-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  employeeID: String;
  password: String;
  repassword: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
     ) { }

  ngOnInit(): void {
  }

  onRegisterSubmit()
  {
   const user = {

    name: this.name,
    username: this.username,
    employeeID: this.employeeID,
    password: this.password,
    repassword: this.repassword
    }


  // Validate all fields
  if(!this.validateService.validateRegister(user)){
     this.flashMessage.show('All fields are compulsory. Please enter all!', { cssClass: 'alert-danger', timeout: 3000 });
    return false;
  }

  //Valid email
  if (!this.validateService.validateEmail(user.username)){
    this.flashMessage.show('Please enter a valid email!', { cssClass: 'alert-danger', timeout: 3000 });
    return false;
}

  //Validate re-entered password
  if (!this.validateService.validatePassword(user.repassword, user.password)){
  this.flashMessage.show('Password not matching! Try again!!', { cssClass: 'alert-danger', timeout: 3000 });
  return false;
}

  //Validate registration
  if (!this.validateService.validatePassword(user.repassword, user.password)){
    this.flashMessage.show('Password not matching! Try again!!', { cssClass: 'alert-danger', timeout: 3000 });
    return false;
  }

  this.authService.registerUser(user).subscribe(data => {
    if(data.success ==='1'){

      this.flashMessage.show('You are now registered and can log in!', {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['../login']);
    }
    else if(data.success ==='0') {

      this.flashMessage.show('Username already exists! Sign in r choose a new username!', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['../register']);
    }
    else{

      this.flashMessage.show('Something went wrong Try again!', {cssClass: 'alert-danger', timeout: 3000});
      this.router.navigate(['../register']);
    }
  });

  }

}
