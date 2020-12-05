import { Page } from './page'

class EmpireStateBuildingPage extends Page {
  // Elements go here
  get thumbnailCaptions () { return $$('.thumbcaption') }
  get captionsMagnifyIcons () { return $$('.thumbcaption .magnify') }

  // Methods go here
}

export { EmpireStateBuildingPage }
