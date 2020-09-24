import { RawElement } from 'raw-element'
import { dom, icon, parse, config } from '@fortawesome/fontawesome-svg-core'
import classList from './utils/get-class-list-from-props.js'
import normalizeIconArgs from './utils/normalize-icon-args.js'
import objectWithKey from './utils/object-with-key.js'

let styleEl,
  useShadowDom = true

config.autoAddCss = false

export const configure = (options = {}) => {
  const { shadowDom = true } = options
  useShadowDom = shadowDom
  config.autoAddCss = !shadowDom
}

export class FontAwesomeIcon extends RawElement {
  static get properties() {
    return {
      icon: { type: String },
      symbol: { type: String },
      title: { type: String },
      size: { type: String },
      flip: { type: String },
      pull: { type: String },
      fixedWidth: { type: Boolean, attribute: 'fixed-width' },
      listItem: { type: Boolean, attribute: 'list-item' },
      swapOpacity: { type: Boolean, attribute: 'swap-opacity' },
      border: { type: Boolean },
      inverse: { type: Boolean },
      spin: { type: Boolean },
      pulse: { type: Boolean },
      rotation: { type: Number },
      transform: {},
      mask: {},
    }
  }

  createRenderRoot() {
    return useShadowDom ? super.createRenderRoot() : this
  }

  render() {
    const {
      icon: iconArgs,
      mask: maskArgs,
      symbol: symbolArgs,
      className,
      title,
    } = this

    const iconLookup = normalizeIconArgs(iconArgs)
    const classes = objectWithKey('classes', [
      ...classList(this),
      ...className.split(' '),
    ])
    const transform = objectWithKey(
      'transform',
      typeof this.transform === 'string'
        ? parse.transform(this.transform)
        : this.transform
    )
    const mask = objectWithKey('mask', normalizeIconArgs(maskArgs))

    const symbol = symbolArgs ? symbolArgs : typeof symbolArgs === 'string'

    const renderedIcon = icon(iconLookup, {
      ...classes,
      ...transform,
      ...mask,
      symbol,
      title,
    })

    if (!renderedIcon) {
      console.warn('Could not find icon', iconLookup)
      this.renderRoot.innerHTML = ''
      return
    }

    this.renderRoot.innerHTML = renderedIcon.html

    if (this.renderRoot !== this) {
      if (!styleEl) {
        styleEl = document.createElement('style')
        styleEl.textContent = dom.css()
      }

      this.renderRoot.appendChild(styleEl.cloneNode(true))
    }
  }
}

customElements.define('fa-icon', FontAwesomeIcon)
