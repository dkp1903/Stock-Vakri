import { AppPage } from './app.po';
import { browser, by, logging, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('workspace-project Candlestick', () => {
    let page: AppPage;

    beforeEach(() => {
    page = new AppPage();
    });

    it('should show Candlestick chart text', () => {
      page.navigateToCandle();
      expect(element(by.cssContainingText('p', 'CandlestickChart')).getText()).toEqual('Type: CandlestickChart');
    });

    it('should show Line chart text', () => {
      page.navigateToCandle();
      let elementToClick = page.getLineButton();
      browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 30000)
      .then(()=>{
        elementToClick.click();
      })
      expect(element(by.cssContainingText('p', 'LineChart')).getText()).toEqual('Type: LineChart');

    });

    it('should show chart for correct stock', () => {
      page.navigateToCandle();
      page.getDropdownOption();
      browser.sleep(4000);
      expect(element(by.cssContainingText('p', 'Displaying stock performance of: IBM')).getText()).toEqual('Displaying stock performance of: IBM');
    });

    it('should add to dropdown', () => {
      page.navigateToCandle();
      page.addSymbolCandle();
      page.addNameCandle();
      let elementToClick = page.getSubmitStockButton();
      browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 30000)
      .then(()=>{
        elementToClick.click();
      })
      browser.sleep(4000);
      element(by.css('select')).element(by.cssContainingText('option', 'Goldman Sachs')).click();
      browser.sleep(4000);
      expect(element(by.cssContainingText('p', 'Displaying stock performance of: GS')).getText()).toEqual('Displaying stock performance of: GS');
    });




});
