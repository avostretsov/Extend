import { Page } from './page'

class EmpireState extends Page {
  // Elements go here
  get thumbnailCaptions () { return $$('.thumbcaption') }
  get captionsMagnifyIcons () { return $$('.thumbcaption .magnify') }
  get chryslerBuildingLink () { return $('=Chrysler Building') }
  get worldTradeCenterLink () { return $('=World Trade Center') }
  get infoBoxRows () { return $('.infobox.vcard', 'tbody tr td:first-child')}

  // Methods go here
  clickChrislerBuildingLink () {
    this.chryslerBuildingLink.click()
  }

  clickWorldTradeCenterLink () {
    this.worldTradeCenterLink.click()
  }

  // infoBoxRowsText () {
  //   this.infoBoxRows.getText()
  // }
}

export { EmpireState }
