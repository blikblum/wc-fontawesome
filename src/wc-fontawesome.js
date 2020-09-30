import { RawElement } from 'raw-element'
import {
  dom,
  icon,
  parse,
  config,
  text,
} from '@fortawesome/fontawesome-svg-core'
import classList from './utils/get-class-list-from-props.js'
import normalizeIconArgs from './utils/normalize-icon-args.js'
import objectWithKey from './utils/object-with-key.js'

const templateEl = document.createElement('template')

let styleEl,
  useShadowDom = true

config.autoAddCss = false

const transformRegex = /transform:(.*?);/
const extractTransformStyle = (abstract) => {
  let result
  const style = abstract[0].attributes.style
  if (style) {
    const match = transformRegex.exec(style)
    result = match && match[1]
  }
  return result || ''
}

const styleElNeeded = () => {
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
    const shadow = this.attachShadow({ mode: 'open' })
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

class FontAwesomeText extends RawElement {
  static get properties() {
    return {
      transform: {},
    }
  }

  render() {
    if (!this.renderRoot.childNodes.length) {
      this.renderRoot.innerHTML = `
      <style>
        :host {          
          display: inline-block;
          position: absolute;
          text-align: center;          
          left: 50%;
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          -webkit-transform-origin: center center;
          transform-origin: center center;
        }

        :host([inverse]) {
          color: #fff;
        }
      </style>
      <slot></slot>
      `
    }

    const transform = objectWithKey(
      'transform',
      typeof this.transform === 'string'
        ? parse.transform(this.transform)
        : this.transform
    )
    // by copying transformForCss could make more efficient. Use public API for now
    const renderedText = text('', transform)
    const transformStyle = extractTransformStyle(renderedText.abstract)
    this.style.transform = transformStyle
  }
}

class FontAwesomeCounter extends RawElement {
  render() {
    if (!this.renderRoot.childNodes.length) {
      this.renderRoot.innerHTML = `
      <style>
        :host {          
          display: inline-block;
          position: absolute;
          text-align: center;          
          
          background-color: #ff253a;
          border-radius: 1em;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          color: #fff;
          height: 1.5em;
          line-height: 1;
          max-width: 5em;
          min-width: 1.5em;
          overflow: hidden;
          padding: 0.25em;
          right: 0;
          text-overflow: ellipsis;
          top: 0;
          -webkit-transform: scale(0.25);
          transform: scale(0.25);
          -webkit-transform-origin: top right;
          transform-origin: top right;          
        }

        :host([position="bottom-left"]) {          
          bottom: 0;
          left: 0;
          right: auto;
          top: auto;
          -webkit-transform: scale(0.25);
          transform: scale(0.25);
          -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
        }

        :host([position="bottom-right"]) {
          bottom: 0;
          right: 0;
          top: auto;
          -webkit-transform: scale(0.25);
          transform: scale(0.25);
          -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
        }

        :host([position="top-left"]) {
          left: 0;
          right: auto;
          top: 0;
          -webkit-transform: scale(0.25);
          transform: scale(0.25);
          -webkit-transform-origin: top left;
          transform-origin: top left;
        }
      </style>
      <slot></slot>
      `
    }
  }
}

customElements.define('fa-icon', FontAwesomeIcon)
customElements.define('fa-layers', FontAwesomeLayers)
customElements.define('fa-text', FontAwesomeText)
customElements.define('fa-counter', FontAwesomeCounter)
