import { Page } from './page'

class HomePage extends Page {
  // Elements go here
  get searchInput () { return $('#searchInput') }
  get searchInputButton () { return $('#searchButton') }
  get searchSuggestionsResult () { return $('.suggestions-result') }

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
  
}

export { HomePage }
