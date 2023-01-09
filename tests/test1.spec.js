import exp from 'constants'
import path from 'path'

describe('variables', () => {
  const dialogHandler2 = jest.fn(dialog => dialog.dismiss())

  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`
    page.on('dialog', dialogHandler2)
    await page.goto(URL, {
      waitUntil: 'networkidle2'
    })
  })

  it('proPrice == 99', async () => {
    const proPrice = await page.evaluate('proPrice')
    expect(proPrice).toEqual(99)
  })

  it('enterprisePrice == 198', async () => {
    const enterprisePrice = await page.evaluate('enterprisePrice')
    expect(enterprisePrice).toEqual(198)
  })
})
