import { ModulePage } from './app.po';

describe('module App', function() {
  let page: ModulePage;

  beforeEach(() => {
    page = new ModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
