import { AppPage } from './app.po';
import { browser, by, logging, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('workspace-project Navbar2', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
 
  // navbar2 text
  it('navbar should display correct text-sections', () => {
    page.navigateToSignIn();
    page.enterSignInUsername();
    page.enterSignInPassword();
    let elementToClick = page.getSignInSubmit();
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 100000)
    .then(()=>{
      elementToClick.click();
    })

    element(by.css("[type='logout']")).getText().then(function(text){ 
      expect(text).toEqual('Logout')});
    
    element(by.css("[type='clients']")).getText().then(function(text){ 
      expect(text).toEqual('Client Details')});

    element(by.css("[type='dashboard']")).getText().then(function(text){ 
      expect(text).toEqual('Dashboard')});

    });


    //navbar2 routes
    it('navbar should route correctly to dashboard', () =>{
      page.navigateToSignIn();
      page.enterSignInUsername();
      page.enterSignInPassword();
      let elementToClick = page.getSignInSubmit();
      browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 100000)
      .then(()=>{
        elementToClick.click();
      })
      element(by.css("[type='dashboard']")).click().then(function(){ // first find list-home a tag and than click 
        browser.sleep(2000).then(function(){
          expect(browser.getCurrentUrl()).toEqual('https://vigilant-sammet-3fed7f.netlify.app/dashboard'); // check the current url is list
        });
      });
    
    });

    it('navbar should route correctly to home on logout', () =>{
      page.navigateToSignIn();
      page.enterSignInUsername();
      page.enterSignInPassword();
      let elementToClick = page.getSignInSubmit();
      browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 100000)
      .then(()=>{
        elementToClick.click();
      })
      element(by.css("[type='logout']")).click().then(function(){ // first find list-home a tag and than click 
        browser.sleep(2000).then(function(){
          expect(browser.getCurrentUrl()).toEqual('https://vigilant-sammet-3fed7f.netlify.app/'); // check the current url is list
        });
      });
    
    });

    it('navbar should route correctly to client details', () =>{
      page.navigateToSignIn();
      page.enterSignInUsername();
      page.enterSignInPassword();
      let elementToClick = page.getSignInSubmit();
      browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 100000)
      .then(()=>{
        elementToClick.click();
      })
      element(by.css("[type='clients']")).click().then(function(){ // first find list-home a tag and than click 
        browser.sleep(2000).then(function(){
          expect(browser.getCurrentUrl()).toEqual('https://vigilant-sammet-3fed7f.netlify.app/dashboard/clients'); // check the current url is list
        });
      });
    
    });

    
  
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

})