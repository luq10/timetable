import { TimetablePage } from './app.po';

describe('timetable App', () => {
  let page: TimetablePage;

  beforeEach(() => {
    page = new TimetablePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
