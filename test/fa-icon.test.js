import './fontawesome-setup'
import { html, fixture, expect, elementUpdated } from '@open-wc/testing'
import { faCheck, faBaby } from '@fortawesome/free-solid-svg-icons'
import { configure } from '../src/wc-fontawesome.js'

describe('fa-icon', () => {
  beforeEach(() => {
    configure({ shadowDom: true })
  })

  describe('shadow-dom', () => {
    it('should be empty when icon is unknow', async () => {
      const el = await fixture(html`<fa-icon icon="hoho"></fa-icon>`)
      expect(el).to.be.empty
    })

    it('should render a known icon', async () => {
      const el = await fixture(html`<fa-icon icon="check"></fa-icon>`)
      expect(el.renderRoot.childNodes.length).to.not.be.equal(0)
      expect(el.renderRoot.childNodes[0]).to.match('svg')
      expect(el.renderRoot.querySelector('path')).to.have.attr(
        'd',
        faCheck.icon[4]
      )
    })

    it('should change content when icon property changes', async () => {
      const el = await fixture(html`<fa-icon icon="check"></fa-icon>`)
      el.icon = 'baby'
      await elementUpdated(el)
      expect(el.renderRoot.childNodes.length).to.not.be.equal(0)
      expect(el.renderRoot.childNodes[0]).to.match('svg')
      expect(el.renderRoot.querySelector('path')).to.have.attr(
        'd',
        faBaby.icon[4]
      )
    })
  })

  describe('light-dom', () => {
    beforeEach(() => {
      configure({ shadowDom: false })
    })

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
