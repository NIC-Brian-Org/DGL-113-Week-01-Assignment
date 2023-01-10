import path from 'path';

describe('index.html', () => {
  const dialogHandler2 = jest.fn(dialog => dialog.accept('Bob'));

  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`;
    page.on('dialog', dialogHandler2);
    await page.goto(URL, {
      waitUntil: 'networkidle2'
    });
  });

  it('should display a dialog', () => {
    expect(dialogHandler2).toHaveBeenCalled();
  });
});
