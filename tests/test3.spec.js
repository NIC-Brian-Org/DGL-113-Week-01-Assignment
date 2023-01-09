import exp from 'constants'
import path from 'path'

describe('dialog', () => {
  const dialogHandler2 = jest.fn(dialog => dialog.dismiss())

  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, '../docs/index.html')}`
    page.on('dialog', dialogHandler2)
    await page.goto(URL, {
      waitUntil: 'networkidle2'
    })
  })

  it('should display a dialog', () => {
    expect(dialogHandler2).toHaveBeenCalled()
  })

  it('should have message "Check out our amazing prices!"', () => {
    const [firstCall] = dialogHandler2.mock.calls
    const [dialog] = firstCall
    expect(dialog.message()).toEqual('Check out our amazing prices!')
  })
})
