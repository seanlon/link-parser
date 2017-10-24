import { browser, element, by } from 'protractor';

export class LinkParserPage {
  navigateTo() {
    return browser.get('/');
  }

  getListLinks() {
    return element(by.css('.link')).getText();
  }
  
  getSubParagraphText() {
    return element(by.css('app-root h3')).getText();
  }
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
