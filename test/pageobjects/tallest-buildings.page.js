import { Page } from './page'

class TallestBuildingsPage extends Page {
  // Elements go here
  get sortByYearBtn () { return $('.headerSort=Year') }
  get empireStateBuildingLinks () { return $$('=Empire State Building') }

  // Methods go here
  sortByYear () {
    this.sortByYearBtn.click()
  }

  goToEmpireStateBuildingPage () {
    this.empireStateBuildingLinks[0].click()
  }
}

export { TallestBuildingsPage }
