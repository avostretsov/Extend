import { HomePage } from '../pageobjects/home.page'
const page = new HomePage()
const helper = require('../helpers/helper')

describe('Wikipedia home page', () => {
  beforeAll(() => {
    browser.url('/')
  })
  it('should redirect from en.wikipedia.org to https://en.wikipedia.org/wiki/Main_Page', () => {
    helper.verifyUrlToBe('https://en.wikipedia.org/wiki/Main_Page')
  })
  it('should allow the user to search and display results', () => {
    const searchParam = "world's tallest building"
    page.setSearchText(searchParam)
    expect(page.searchSuggestionsResult).toHaveText(searchParam, { ignoreCase: true })
  })
  it('should redirect from https://en.wikipedia.org/wiki/Main_Page to https://en.wikipedia.org/wiki/List_of_tallest_buildings upon clicking on search suggestion', () => {
    const searchParam = "world's tallest building"
    page.setSearchText(searchParam)
    page.searchSuggestionsResultSelect()
    helper.verifyUrlToBe('https://en.wikipedia.org/wiki/List_of_tallest_buildings')
  })

})
