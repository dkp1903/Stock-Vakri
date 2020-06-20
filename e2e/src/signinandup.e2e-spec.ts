import { AppPage } from './app.po';
import { browser, by, logging, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('workspace-project Sign-In and Up', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  //signup singleton tests
  it('should add name to sign up field', () => {
    page.navigateToSignup();

    page.enterSignUpName();

    expect( element(by.name('name')).getAttribute('value')).toEqual('abcde');
  });

  it('should add ID to sign up field', () => {
    page.navigateToSignup();


    page.enterSignUpID();
    expect( element(by.name('employeeID')).getAttribute('value')).toEqual('10101');
  });
  it('should add username to sign up field', () => {
    page.navigateToSignup();

    page.enterSignUpUsername();

    expect( element(by.name('username')).getAttribute('value')).toEqual('alp2@gmail.com');
  });

  it('should add password to sign up field', () => {
    page.navigateToSignup();

    page.enterSignUpPassword();

    expect( element(by.name('password')).getAttribute('value')).toEqual('1234');
  });

  it('should add confirm password to sign up field', () => {
    page.navigateToSignup();

    page.enterSignUpRepassword();

    expect( element(by.name('repassword')).getAttribute('value')).toEqual('1234');
  });

  // it('should sign up the user', () => {
  //   page.navigateToSignup();
  //   page.enterSignUpUsername();
  //   page.enterSignUpPassword();
  //   page.enterSignUpRepassword();
  //   let elementToClick = page.getSignUpSubmit();
  //   browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 10000)
  //   .then(()=>{
  //     elementToClick.click();
  //   });
  //   browser.sleep(9000);
  //   expect(browser.getCurrentUrl()).toEqual('https://vigilant-sammet-3fed7f.netlify.app/login');
  // });

  it('should sign in the user', () => {
    page.navigateToSignIn();
    page.enterSignInUsername();
    page.enterSignInPassword();
    let elementToClick = page.getSignInSubmit();
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 100000)
    .then(()=>{
      elementToClick.click();
    })

    expect(browser.getCurrentUrl()).toEqual('https://vigilant-sammet-3fed7f.netlify.app/dashboard');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

})
