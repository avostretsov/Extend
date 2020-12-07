import { TallestBuildingsPage } from '../pageobjects/tallest-buildings.page'
const page = new TallestBuildingsPage()
const helper = require('../helpers/helper')

describe('Wikipedia Tallest Buildings page', () => {
  beforeEach(() => {
    browser.url('/wiki/List_of_tallest_buildings')
  })

  it('should display accurate meters to foot conversion on example of second tallest building', () => {
    const tableRowsText = page.tableRows.getText().split('\n')
    const secondFromTopRow = tableRowsText[3].replace(/\t/g,' ').split(' ')
    const m = secondFromTopRow[6]
    const ft = secondFromTopRow[7].replace(/,/g , '')
    expect(page.convertMtoFt(m)).toEqual(parseInt(ft))
  })
  it('should allow user to sort descending by Year and display Empire State Building at the top', () => {
    page.sortByYear()
    const tableRowsText = page.tableRows.getText().split('\n')
    expect(tableRowsText[2]).toContain('Empire State')
  })
  it('should allow the user to click on Empire State Building Link and redirect to its page', () => {
    page.clickEmpireStateBuildingLink()
    helper.verifyUrlToBe('https://en.wikipedia.org/wiki/Empire_State_Building')
  })
})
