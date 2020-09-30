import { LitElement, html } from 'lit-element'
import { faStyles } from './faStyles.js'

const renderIcon = (icon) => {
  return html`
    <h3>Simple:</h3>
    <fa-icon icon=${icon}></fa-icon>

    <h3>Size:</h3>
    <fa-icon icon=${icon} size="xs"></fa-icon>
    <fa-icon icon=${icon} size="lg"></fa-icon>
    <fa-icon icon=${icon} size="6x"></fa-icon>

    <h3>Fixed width:</h3>
    <fa-icon icon=${icon} fixed-width></fa-icon>

    <h3>Inverse:</h3>
    <fa-icon icon=${icon} inverse style="background-color: blue;"></fa-icon>

    <h3>List Item:</h3>
    <ul class="fa-ul">
      <li><fa-icon icon=${icon} list-item></fa-icon>List icon</li>
    </ul>

    <h3>Rotation:</h3>
    <fa-icon icon=${icon} rotation="90"></fa-icon>
    <fa-icon icon=${icon} rotation="180"></fa-icon>
    <fa-icon icon=${icon} rotation="270"></fa-icon>

    <h3>Flip:</h3>
    <fa-icon icon=${icon} flip="horizontal"></fa-icon>
    <fa-icon icon=${icon} flip="vertical"></fa-icon>
    <fa-icon icon=${icon} flip="both"></fa-icon>

    <h3>Animation:</h3>
    <fa-icon icon=${icon} spin></fa-icon>
    <fa-icon icon=${icon} pulse></fa-icon>

    <h3>Border:</h3>
    <fa-icon icon=${icon} border></fa-icon>

    <h3>Pull:</h3>
    <div style="width: 400px;">
      <fa-icon icon=${icon} pull="left"></fa-icon>Gatsby believed in the green
      light, the orgastic future that year by year recedes before us. It eluded
      us then, but that’s no matter — tomorrow we will run faster, stretch our
      arms further... And one fine morning — So we beat on, boats against the
      current, borne back ceaselessly into the past.
    </div>

    <br />

    <div style="width: 400px;">
      <fa-icon icon=${icon} pull="right"></fa-icon>Gatsby believed in the green
      light, the orgastic future that year by year recedes before us. It eluded
      us then, but that’s no matter — tomorrow we will run faster, stretch our
      arms further... And one fine morning — So we beat on, boats against the
      current, borne back ceaselessly into the past.
    </div>

    <h3>Swap opacity (duotone icons only):</h3>
    <fa-icon icon=${icon} swap-opacity></fa-icon>

    <h3>Transforms:</h3>
    <fa-icon icon=${icon} transform="shrink-6 left-4"></fa-icon>
    <fa-icon icon=${icon} .transform=${{ rotate: 42 }}></fa-icon>

    <h3>Mask:</h3>
    <fa-icon icon=${icon} mask="circle"></fa-icon>

    <h3>Symbols:</h3>
    <fa-icon icon="spinner" symbol></fa-icon>
    <fa-icon icon=${icon} symbol="symbol-icon"></fa-icon>

    <svg>
      <use xlink:href="#fas-fa-spinner"></use>
    </svg>
    <svg>
      <use xlink:href="#symbol-icon"></use>
    </svg>

    <h3>Layers:</h3>
    <h5>With <code>fa-layers</code> component</h5>
    <div style="font-size:4em">
      <fa-layers class="fa-fw">
        <fa-icon icon="square"></fa-icon>
        <fa-icon icon="check" inverse transform="shrink-6"></fa-icon>
      </fa-layers>

      <fa-layers class="fa-fw" style="background:MistyRose">
        <fa-icon icon="circle" style="color:Tomato"></fa-icon>
        <fa-icon icon="times" inverse transform="shrink-6"></fa-icon>
      </fa-layers>

      <fa-layers class="fa-fw" style="background:MistyRose">
        <fa-icon icon="bookmark"></fa-icon>
        <fa-icon
          icon="heart"
          transform="shrink-10 up-2"
          style="color:Tomato"
        ></fa-icon>
      </fa-layers>

      <fa-layers class="fa-fw" style="background:MistyRose">
        <fa-icon icon="play" transform="rotate--90 grow-2"></fa-icon>
        <fa-icon icon="sun" inverse transform="shrink-10 up-2"></fa-icon>
        <fa-icon
          icon="moon"
          inverse
          transform="shrink-11 down-4.2 left-4"
        ></fa-icon>
        <fa-icon
          icon="star"
          inverse
          transform="shrink-11 down-4.2 right-4"
        ></fa-icon>
      </fa-layers>

      <fa-layers class="fa-fw" style="background:MistyRose">
        <fa-icon icon="calendar"></fa-icon>
        <fa-text inverse transform="shrink-8 down-3" style="font-weight:900"
          >27</fa-text
        >
      </fa-layers>

      <fa-layers class="fa-layers fa-fw" style="background:MistyRose">
        <fa-icon icon="certificate"></fa-icon>
        <fa-text
          inverse
          transform="shrink-11.5 rotate--30"
          style="font-weight:900"
          >NEW</fa-text
        >
      </fa-layers>

      <fa-layers class="fa-layers fa-fw" style="background:MistyRose">
        <fa-icon icon="envelope"></fa-icon>
        <fa-counter style="background:Tomato">1,419</fa-counter>
      </fa-layers>
    </div>

    <h5>With plain markup</h5>
    <div style="font-size:4em">
      <span class="fa-layers fa-fw">
        <fa-icon icon="square"></fa-icon>
        <fa-icon icon="check" inverse transform="shrink-6"></fa-icon>
      </span>

      <span class="fa-layers fa-fw" style="background:MistyRose">
        <fa-icon icon="circle" style="color:Tomato"></fa-icon>
        <fa-icon icon="times" inverse transform="shrink-6"></fa-icon>
      </span>

      <span class="fa-layers fa-fw" style="background:MistyRose">
        <fa-icon icon="bookmark"></fa-icon>
        <fa-icon
          icon="heart"
          transform="shrink-10 up-2"
          style="color:Tomato"
        ></fa-icon>
      </span>

      <span class="fa-layers fa-fw" style="background:MistyRose">
        <fa-icon icon="play" transform="rotate--90 grow-2"></fa-icon>
        <fa-icon icon="sun" inverse transform="shrink-10 up-2"></fa-icon>
        <fa-icon
          icon="moon"
          inverse
          transform="shrink-11 down-4.2 left-4"
        ></fa-icon>
        <fa-icon
          icon="star"
          inverse
          transform="shrink-11 down-4.2 right-4"
        ></fa-icon>
      </span>

      <span class="fa-layers fa-fw" style="background:MistyRose">
        <fa-icon icon="calendar"></fa-icon>
        <fa-text inverse transform="shrink-8 down-3" style="font-weight:900"
          >27</fa-text
        >
      </span>

      <span class="fa-layers fa-fw" style="background:MistyRose">
        <fa-icon icon="certificate"></fa-icon>
        <fa-text
          inverse
          transform="shrink-11.5 rotate--30"
          style="font-weight:900"
          >NEW</fa-text
        >
      </span>

      <span class="fa-layers fa-fw" style="background:MistyRose">
        <fa-icon icon="envelope"></fa-icon>
        <fa-counter style="background:Tomato">1,419</fa-counter>
      </span>
    </div>
  `
}

class FAIconExamples extends LitElement {
  static get styles() {
    return [faStyles]
  }

  static get properties() {
    return {
      icon: { type: String },
    }
  }

  render() {
    return renderIcon(this.icon)
  }
}

class FAIconShadowExamples extends LitElement {
  static get properties() {
    return {
      icon: { type: String },
    }
  }

  render() {
    return renderIcon(this.icon)
  }
}

customElements.define('fa-icon-examples', FAIconExamples)
customElements.define('fa-icon-shadow-examples', FAIconShadowExamples)
