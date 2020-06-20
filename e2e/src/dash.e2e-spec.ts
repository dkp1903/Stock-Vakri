import { AppPage } from './app.po';
import { browser, by, logging, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('workspace-project Dash', () => {
    let page: AppPage;

    beforeEach(() => {
    page = new AppPage();
    });

    // it('should give hi user', () =>{
    //     page.navigateToSignIn();
    //     page.enterSignInUsername();
    //     page.enterSignInPassword();
    //     let elementToClick = page.getSignInSubmit();
    //     browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 100000)
    //     .then(()=>{
    //       elementToClick.click();
    //     });
    //     expect(element(by.cssContainingText('div', 'Good to see you at work. ')).getText()).toEqual('Good to see you at work. ');

    //   });




});
