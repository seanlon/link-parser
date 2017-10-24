import { LinkParserPage } from './app.po';

describe('link-parser App', () => {
  let page: LinkParserPage;

  beforeEach(() => {
    page = new LinkParserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
