import { HomePage } from '../pageobjects/home.page'
const homePage = new HomePage()

describe('Wikipedia home page', () => {
  it('should redirect from en.wikipedia.org to https://en.wikipedia.org/wiki/Main_Page', () => {
    browser.url('https://en.wikipedia.org')

    const expected = 'https://en.wikipedia.org/wiki/Main_Page'
    const value = browser.getUrl()
    expect(value).toEqual(expected)
  })

  it('should allow the user to search and display results', () => {
    const searchParam = "world's tallest building"
    homePage.setSearchText(searchParam)
    expect(homePage.searchSuggestionsResult).toHaveText(searchParam, { ignoreCase: true })
  })
})
