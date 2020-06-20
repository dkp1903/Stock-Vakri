import { AppPage } from './app.po';
import { browser, by, logging, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('workspace-project Candlestick', () => {
    let page: AppPage;

    beforeEach(() => {
    page = new AppPage();
    });

    it('should show default category news', () => {
      page.navigateToNews();
      // page.getDropdownTypeOption();
      browser.sleep(4000);
      expect(element(by.cssContainingText('p', 'Showing news in category: stocks')).getText()).toEqual('Showing news in category: stocks');
    });

    it('should select news type', () => {
      page.navigateToNews();
      page.getDropdownTypeOption();
      browser.sleep(4000);
      expect(element(by.cssContainingText('p', 'Showing news in category: finance')).getText()).toEqual('Showing news in category: finance');
    });


});
