import { EmpireStateBuildingPage } from '../pageobjects/empire-state.page'
const page = new EmpireStateBuildingPage()

describe('Wikipedia Empire State Building page', () => {
  beforeAll(() => {
    browser.url('https://en.wikipedia.org/wiki/Empire_State_Building')
  })

  it('should have the Chrysler Building as Preceded by link', () => {
    //TBD
  })
  it('should have the World Trade Center (North tower) as Surpassed by link', () => {
    // TBD
  })
  it('should have Magnify icon in the caption below each photo thumbnail', () => {
    const thumbnailCaptionsCount = page.thumbnailCaptions.length
    const captionsMagnifyIconsCount = page.captionsMagnifyIcons.length
    expect(thumbnailCaptionsCount).toEqual(captionsMagnifyIconsCount)
  })
})
