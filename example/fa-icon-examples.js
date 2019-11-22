import { LitElement, html } from 'lit-element'

class FAIconExamples extends LitElement {
  static get properties() {
    return {
      icon: { type: String }
    }
  }

  createRenderRoot() {
    return this
  }

  render() {
    const icon = this.icon
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
        light, the orgastic future that year by year recedes before us. It
        eluded us then, but that’s no matter — tomorrow we will run faster,
        stretch our arms further... And one fine morning — So we beat on, boats
        against the current, borne back ceaselessly into the past.
      </div>

      <br />

      <div style="width: 400px;">
        <fa-icon icon=${icon} pull="right"></fa-icon>Gatsby believed in the
        green light, the orgastic future that year by year recedes before us. It
        eluded us then, but that’s no matter — tomorrow we will run faster,
        stretch our arms further... And one fine morning — So we beat on, boats
        against the current, borne back ceaselessly into the past.
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
      <div class="fa-layers fa-fw">
        <fa-icon icon="square" color="green"></fa-icon>
        <fa-icon icon="check" inverse transform="shrink-6"></fa-icon>
      </div>
    `
  }
}

customElements.define('fa-icon-examples', FAIconExamples)
