import path from 'path';

describe('rooms.html', () => {
  const dialogHandler2 = jest.fn(dialog => dialog.accept('200'));

  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/rooms.html')}`;
    page.on('dialog', dialogHandler2);
    await page.goto(URL, {
      waitUntil: 'networkidle2'
    });
  });

  it('should display a dialog', () => {
    expect(dialogHandler2).toHaveBeenCalled();
  });
});
