import { AppTestPage } from './app.po';

describe('app-test App', () => {
  let page: AppTestPage;

  beforeEach(() => {
    page = new AppTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
