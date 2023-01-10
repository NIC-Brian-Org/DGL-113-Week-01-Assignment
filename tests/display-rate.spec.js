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

  it('daily rate line: $200', async () => {
    await page.waitForSelector('#dailyrate');
    const element = await page.$('#dailyrate');
    const value = await page.evaluate(el => el.textContent, element);
    expect(value).toMatch(/^\$.*[^0-9\.]200$/);
  });
});
