import { Injectable } from '@angular/core';
// import { userInfo } from 'os';


@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.name == undefined || user.username == undefined || user.employeeID == undefined || user.password == undefined ){
      return false;
    }
    else{
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePassword(password, repassword) {
    if( password == repassword ){
      return true;
  }
    else{
      return false;
    }
  }

  validateLogin(user){
    if(user.password == undefined || user.username == undefined){
      return false;
    }
    else{
      return true;
    }
  }

}
