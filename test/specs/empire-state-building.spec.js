import { EmpireState } from '../pageobjects/empire-state.page'
const page = new EmpireState()
const helper = require('../helpers/helper')

describe('Wikipedia Empire State Building page', () => {
  beforeEach(() => {
    browser.url('/wiki/Empire_State_Building')
  })

  it('should have the Chrysler Building as Preceded by link', () => {
    expect(page.infoBoxRows.getText().split('\n')
      .find(text => text.includes('Preceded by'))).toContain('Chrysler Building')
    page.clickChrislerBuildingLink()
    helper.verifyUrlToBe('https://en.wikipedia.org/wiki/Chrysler_Building')
  })
  it('should have the World Trade Center (North tower) as Surpassed by link', () => {
    expect(page.infoBoxRows.getText().split('\n')
      .find(text => text.includes('Surpassed by'))).toContain('World Trade Center (North Tower)')
    page.clickWorldTradeCenterLink()
    helper.verifyUrlToBe('https://en.wikipedia.org/wiki/World_Trade_Center_(1973%E2%80%932001)')
  })
  it('should have Magnify icon in the caption below each photo thumbnail', () => {
    const thumbnailCaptionsCount = page.thumbnailCaptions.length
    const captionsMagnifyIconsCount = page.captionsMagnifyIcons.length
    expect(thumbnailCaptionsCount).toEqual(captionsMagnifyIconsCount)
  })
})
