import { Page } from './page'

class HomePage extends Page {
  // Elements go here
  get searchInput () { return $('#searchInput') }
  get searchInputButton () { return $('#searchButton') }
  get searchSuggestionsResult () { return $('.suggestions-result') }
  get sortByYearBtn () { return $('.headerSort=Year') }
  get empireStateBuildingLinks () { return $$('=Empire State Building') }

  // Methods go here
  setSearchText (text) {
    this.searchInput.setValue(text)
  }

  search () {
    this.searchInputButton.click()
  }

  searchSuggestionsResultSelect () {
    this.searchSuggestionsResult.click()
  }

  sortByYear () {
    this.sortByYearBtn.click()
  }

  goToEmpireStateBuildingPage () {
    this.empireStateBuildingLinks[0].click()
  }
}

export { HomePage }
