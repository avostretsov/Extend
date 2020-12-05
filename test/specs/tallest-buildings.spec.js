import { TallestBuildingsPage } from '../pageobjects/tallest-buildings.page'
const page = new TallestBuildingsPage()
const helper = require('../helpers/helper')

describe('Wikipedia Tallesr Buildings page', () => {
  beforeAll(() => {
    browser.url('https://en.wikipedia.org/wiki/List_of_tallest_buildings')
  })

  it('find second tallest', () => {
    // TBD
  })
  it('sort descending to find Empire State', () => {
    page.sortByYear()
    browser.pause(1000)
    // TBD
  })
  it('should allow the user to click on Empire State Building Link and redirect to its page', () => {
    page.goToEmpireStateBuildingPage()
    helper.verifyUrlToBe('https://en.wikipedia.org/wiki/Empire_State_Building')
    browser.pause(1000)
  })
})
