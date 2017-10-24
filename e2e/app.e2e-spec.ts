import { LinkParserPage } from './app.po';
import { browser, element, by } from 'protractor';
describe('link-parser App', () => {
  let page: LinkParserPage;

  beforeEach(() => {
    page = new LinkParserPage();
  });

  it('should display message saying app link checker', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('App Link Checker');
  });

  it('should have a list fetch from services', () => {
    // after sleeping then print "waited 10 seconds"
    browser.sleep(3.5 * 1000).then(function () {
      console.log('waited 3.5 seconds');
      expect(page.getListLinks()).toContain(' ');
    });
  });
  it("broken link shhould go 404 not found", function () {
    const brokenLink = element(by.className('broken'));
    brokenLink.click();

    browser.sleep(1.5 * 1000).then(function () {
      console.log('waited 1.5 seconds');
      expect(page.getSubParagraphText()).toContain('404 NOT FOUND');
    });
  });
 });

