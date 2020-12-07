import { Page } from './page'

class TallestBuildingsPage extends Page {
  // Elements go here
  get sortByYearBtn () { return $('.headerSort=Year') }
  get empireStateBuildingLinks () { return $$('=Empire State Building') }
  get tableRows () { return $('.wikitable.sortable.jquery-tablesorter', 'tbody tr td:first-child')}

  // Methods go here
  sortByYear () {
    this.sortByYearBtn.click()
  }

  clickEmpireStateBuildingLink () {
    this.empireStateBuildingLinks[0].click()
  }

  convertMtoFt (num) {
    return Math.round(num * 3.2808)
  }
}

export { TallestBuildingsPage }
