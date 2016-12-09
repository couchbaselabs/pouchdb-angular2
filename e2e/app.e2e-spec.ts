import { PouchProjectPage } from './app.po';

describe('pouch-project App', function() {
  let page: PouchProjectPage;

  beforeEach(() => {
    page = new PouchProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
