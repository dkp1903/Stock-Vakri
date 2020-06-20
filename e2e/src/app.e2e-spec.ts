import { AppPage } from './app.po';
import { browser, by, logging, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('workspace-project Home', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display home page-title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to our Broker Dashboard!');
  });

  it('Back to home button should work', () => {
    page.navigateTo();
    let elementToClick=page.getHomeButton();
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick))
    .then(()=>{
      elementToClick.click();
    })
    expect(browser.getCurrentUrl()).toEqual('https://vigilant-sammet-3fed7f.netlify.app/#');
  });

  it('should route to sign up page', () => {
    page.navigateTo();
    let elementToClick=page.getSignUpButton();
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick))
    .then(()=>{
      elementToClick.click();
    })
    expect(browser.getCurrentUrl()).toEqual('https://vigilant-sammet-3fed7f.netlify.app/register');

  });

  it('should route to sign in page', () => {
    page.navigateTo();
    let elementToClick=page.getSignInButton();
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick))
    .then(()=>{
      elementToClick.click();
    })
    expect(page.getSignInText()).toEqual('Sign In');
  });

  it('should route to candlestick page', () => {
    page.navigateTo();
    let elementToClick=page.getCandleStickButton();
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick))
    .then(()=>{
      elementToClick.click();
    })
    expect(browser.getCurrentUrl()).toEqual('https://vigilant-sammet-3fed7f.netlify.app/candlestick');
  });

  it('should route to news page', () => {
    page.navigateTo();
    let elementToClick=page.getNewsButton();
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick))
    .then(()=>{
      elementToClick.click();
    })
    expect(browser.getCurrentUrl()).toEqual('https://vigilant-sammet-3fed7f.netlify.app/news');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

})
