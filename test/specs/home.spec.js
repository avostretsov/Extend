import { HomePage } from '../pageobjects/home.page'
const homePage = new HomePage()
const helper = require('../helpers/helper')

describe('Wikipedia home page', () => {
  
  it('should redirect from en.wikipedia.org to https://en.wikipedia.org/wiki/Main_Page', () => {
    browser.url('https://en.wikipedia.org')
    helper.verifyUrlToBe('https://en.wikipedia.org/wiki/Main_Page')
  })
  it('should allow the user to search and display results', () => {
    const searchParam = "world's tallest building"
    homePage.setSearchText(searchParam)
    expect(homePage.searchSuggestionsResult).toHaveText(searchParam, { ignoreCase: true })
  })
  it('should redirect from https://en.wikipedia.org/wiki/Main_Page to https://en.wikipedia.org/wiki/List_of_tallest_buildings upon', () => {
    const searchParam = "world's tallest building"
    homePage.setSearchText(searchParam)
    homePage.searchSuggestionsResultSelect()
    helper.verifyUrlToBe('https://en.wikipedia.org/wiki/List_of_tallest_buildings')
  })
  it('find second tallest', () => {
    // TBD
  })
  it('sort descending to find Empire State', () => {
    homePage.sortByYear()
    browser.pause(1000)
    // TBD
  })
  it('should allow the user to click on Empire State Building Link and redirect to its page', () => {
    homePage.goToEmpireStateBuildingPage()
    helper.verifyUrlToBe('https://en.wikipedia.org/wiki/Empire_State_Building')
    browser.pause(1000)
  })
})
