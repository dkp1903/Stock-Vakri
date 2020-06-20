import { AppPage } from './app.po';
import { browser, by, logging, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('workspace-project Navbar2', () => {
    let page: AppPage;

    beforeEach(() => {
    page = new AppPage();
    });

    it('it should display client details', () =>{
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
            element(by.css("h1")).getText().then(function(text){
                expect(text).toEqual('Client Administrator')}); // check the current url is list
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
