import { RawElement } from 'raw-element'
import { dom, icon, parse, config } from '@fortawesome/fontawesome-svg-core'
import classList from './utils/get-class-list-from-props.js'
import normalizeIconArgs from './utils/normalize-icon-args.js'
import objectWithKey from './utils/object-with-key.js'

const templateEl = document.createElement('template')

let styleEl,
  useShadowDom = true


config.autoAddCss = false

export const styleElNeeded = () => {
  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.textContent = dom.css()
  }  
}

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

  constructor() {
    super()
    this._iconCount = 0
    this._hasStyleEl = false
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
    
    if (this.renderRoot !== this && !this._hasStyleEl) {
      styleElNeeded()

      this.renderRoot.appendChild(styleEl.cloneNode(true))
      this._hasStyleEl = true
    }

    // remove old svg nodes
    const nodeStart = this._hasStyleEl ? 1 : 0
    for (let i = 0; i < this._iconCount; i++) {
      this.renderRoot.childNodes[nodeStart].remove()
    }

    if (!renderedIcon) {
      console.warn('Could not find icon', iconLookup)
      return
    }
    templateEl.innerHTML = renderedIcon.html
    this._iconCount = templateEl.content.childNodes.length
    this.renderRoot.appendChild(templateEl.content)
  }
}

class FontAwesomeLayers extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          display: inline-block;
          height: 1em;
          position: relative;
          text-align: center;
          vertical-align: -0.125em;
          width: 1em;
        }
        :host(.fa-fw) {
          text-align: center;
          width: 1.25em;
        }
        ::slotted(fa-icon) {
          bottom: 0;
          left: 0;
          margin: auto;
          position: absolute;
          right: 0;
          top: 0;
        }
      </style>
      <slot></slot>
    `
  }
}

customElements.define('fa-icon', FontAwesomeIcon)
customElements.define('fa-layers', FontAwesomeLayers)
