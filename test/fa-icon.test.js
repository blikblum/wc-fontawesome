import './fontawesome-setup'
import { html, fixture, expect, elementUpdated } from '@open-wc/testing'
import { faCheck, faBaby } from '@fortawesome/free-solid-svg-icons'

describe('fa-icon', () => {
  describe('light-dom', () => {
    it('should be empty when icon is unknow', async () => {
      const el = await fixture(html`<fa-icon icon="hoho"></fa-icon>`)
      expect(el).to.be.empty
    })

    it('should render a known icon', async () => {
      const el = await fixture(html`<fa-icon icon="check"></fa-icon>`)
      expect(el).to.not.be.empty
      expect(el.childNodes[0]).to.match('svg')
      expect(el.querySelector('path')).to.have.attr('d', faCheck.icon[4])
    })

    it('should change content when icon property changes', async () => {
      const el = await fixture(html`<fa-icon icon="check"></fa-icon>`)
      el.icon = 'baby'
      await elementUpdated(el)
      expect(el).to.not.be.empty
      expect(el.childNodes[0]).to.match('svg')
      expect(el.querySelector('path')).to.have.attr('d', faBaby.icon[4])
    })
  })
})
