import { RcWebsitePage } from './app.po';

describe('rc-website App', function() {
  let page: RcWebsitePage;

  beforeEach(() => {
    page = new RcWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
