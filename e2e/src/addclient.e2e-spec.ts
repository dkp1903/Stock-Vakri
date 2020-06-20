import { AppPage } from './app.po';
import { browser, by, logging, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('workspace-project Add Client', () => {
    let page: AppPage;

    beforeEach(() => {
    page = new AppPage();
    });

    it('should be able to add client',()=>{
        page.navigateToSignIn()
        page.enterSignInUsername();
        page.enterSignInPassword();
        page.getSignInSubmit().click();
        expect(browser.getCurrentUrl()).toEqual('https://vigilant-sammet-3fed7f.netlify.app/dashboard');
        let elementToClick=page.getClientButton();

         expect(elementToClick.getText()).toEqual('REGISTER CLIENT');
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 10000).then(()=>{
          elementToClick.click();
        })
        // browser.getAllWindowHandles().then((handles)=>{
        //       browser.switchTo().window(handles[handles.length-1]);
        // });
        // browser.driver.switchTo().activeElement();

        let dialog=element(by.css("[role='dialog']"));
        expect(dialog.element(by.css('.ui-dialog-title')).getText()).toEqual('Register New Client');

        let form=dialog.element(by.css('.ui-dialog-content')).element(by.css('form'));

        form.element(by.name('BrokerID')).sendKeys('raj@db.com');
        expect((form.element(by.name('BrokerID'))).getAttribute('value')).toEqual('raj@db.com');

        form.element(by.name('ClientID')).sendKeys('DB_101');
        expect((form.element(by.name('ClientID'))).getAttribute('value')).toEqual('DB_101');


        form.element(by.name('ClientName')).sendKeys('Hello Moto');
        expect((form.element(by.name('ClientName'))).getAttribute('value')).toEqual('Hello Moto');

        form.element(by.name('MobileNo')).sendKeys('9988556622');
        expect((form.element(by.name('MobileNo'))).getAttribute('value')).toEqual('9988556622');
        // //dialog.element(by.css('.ui-dialog-content'))
        let temp =form.element(by.css('button'));
        //.element(by.css('button'));
        //
        //console.log("hi: ",temp.getText());
        // temp.getText().then( function(text){
        //   expect(text).toEqual('SUBMIT')});

         browser.wait(protractor.ExpectedConditions.elementToBeClickable(temp), 10000).then(()=>{
          temp.click();
         })
      });




    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
        } as logging.Entry));
    });

})
