import { browser, by, element } from 'protractor';


export class AppPage {

  //navigations
  navigateTo(): Promise<unknown> {
    return browser.get('https://vigilant-sammet-3fed7f.netlify.app/') as Promise<unknown>;
  }

  navigateToDash(): Promise<unknown> {
    return browser.get('https://vigilant-sammet-3fed7f.netlify.app/dashboard') as Promise<unknown>;
  }

  navigateToSignup(): Promise<unknown> {
    return browser.get('https://vigilant-sammet-3fed7f.netlify.app/register') as Promise<unknown>;
  }

  navigateToSignIn(): Promise<unknown> {
    return browser.get('https://vigilant-sammet-3fed7f.netlify.app/login') as Promise<unknown>;
  }

  navigateToCandle(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/candlestick') as Promise<unknown>;
  }

  navigateToNews(): Promise<unknown> {
    return browser.get( browser.baseUrl + '/news') as Promise<unknown>;
  }

  //home page
  getHomeButton(){
    return element(by.css("[title='Home']"));
  }
  getTitleText(): Promise<string> {
    return element(by.css('app-home h1')).getText() as Promise<string>;
  }
  getSignUpButton(){
    return element(by.css("[type='signup']"));
  }
  getSignUpText(){
    return element(by.css("app-register h1")).getText();
  }

  getSignInButton(){
    return element(by.css("[type='signin']"));
  }
  getSignInText(){
    return element(by.css("app-login h1")).getText();
  }
  getCandleStickButton(){
    return element(by.css("[type='candlestick']"));
  }
  getNewsButton(){
    return element(by.css("[type='news']"));
  }

  //Sign Up
  enterSignUpName(){
    return element(by.name('name')).sendKeys('abcde');
  }
  enterSignUpID(){
    return element(by.name('employeeID')).sendKeys('10101');
  }
  enterSignUpUsername(){
    return element(by.name('username')).sendKeys('alp2@gmail.com');
  }
  enterSignUpPassword(){
    return element(by.name('password')).sendKeys('1234');
  }
  enterSignUpRepassword(){
    return element(by.name('repassword')).sendKeys('1234');
  }
  getSignUpSubmit(){
    return element(by.css("[type='submit']"));
  }

  //Sign In
  enterSignInUsername(){
    return element(by.name('username')).sendKeys('raj@db.com');
  }
  enterSignInPassword(){
    return element(by.name('password')).sendKeys('namtohsunahoga');
  }

  getSignInSubmit(){
    return element(by.css("[type='submit']"));
  }

  //Candlestick

  addSymbolCandle(){
    return element(by.name('symbol')).sendKeys('GS');
  }
  addNameCandle(){
    return element(by.name('name')).sendKeys('Goldman Sachs');
  }
  getSubmitStockButton(){
    return element(by.css("[type='submit']"));
  }
  getLineButton(){
    return element(by.css("[type='button']"));
  }
  getDropdownOption(){
    return element(by.css('select')).element(by.cssContainingText('option', 'IBM')).click();

  }
  //News
  getDropdownTypeOption(){
    return element(by.css('select')).element(by.cssContainingText('option', 'finance')).click();

  }
  addNewsType(){
    return element(by.name('name')).sendKeys('bank');
  }
  //Add client
  getClientButton(){
    return element(by.css("button[label='Show']"));
  }
}

