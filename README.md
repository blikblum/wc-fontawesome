# wc-fontawesome

Web component integration with Font Awesome (v5)

### Installation

Libraries

```
yarn add wc-fontawesome @fortawesome/fontawesome-svg-core
```

Icons

```
yarn add @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
```

### Usage

```js
import 'wc-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faSpinner } from '@fortawesome/free-solid-svg-icons'

// add all solid icons...
library.add(fas)
// ... or individually
library.add(faSpinner)
```

```html
<fa-icon icon="spinner"></fa-icon>
```

#### Examples

Look at the provided [example](example/index.html): clone repository, install dependencies and run npm `start` script or check the [live example](https://codesandbox.io/s/wc-fontawesome-example-s4lqs?file=/src/index.js).

#### With shadow Dom

Font Awesome is implemented using global styles which do not work in web components that renders in shadow Dom.

To use `wc-fontawesome` along side shadow Dom is necessary to add the Font Awesome css in the component. See example below or check
how can be done using LitElement [styling system](example/fa-icon-examples.js#L205).

```js
import { dom } from '@fortawesome/fontawesome-svg-core'

class ElementWithIcons extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    shadow.innerHTML = `
      <style>
        ${dom.css()}
      </style>
      <fa-icon name="spinner"></fa-icon>
    `
  }
}
```

Alternatively, enable the usage of shadow Dom in `fa-icon` component. This will allow to use it in any web component with the drawback of breaking layers functionality:

```js
import { configure } from 'wc-fontawesome'

configure({ shadowDom: true })
```

### Components

- `fa-icon`: show icon defined by `icon` or `name` property
- `fa-text`: show text in layers
- `fa-counter`: show counter in layers
- `fa-layers`: container for layers (experimental - use `div` with `fa-layers` class instead)

### Features

The following features are implemented

#### Basic

[Size](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons):

```html
<fa-icon icon="spinner" size="xs"></fa-icon>
<fa-icon icon="spinner" size="lg"></fa-icon>
<fa-icon icon="spinner" size="6x"></fa-icon>
```

Note that icon size can be controlled with the CSS `font-size` attribute, and `fa-icon`'s `size` prop determines icon size relative to the current `font-size`.

[Fixed width](https://fontawesome.com/how-to-use/on-the-web/styling/fixed-width-icons):

```html
<fa-icon icon="spinner" fixed-width></fa-icon>
```

Inverse:

```html
<fa-icon icon="spinner" inverse></fa-icon>
```

[List Items](https://fontawesome.com/how-to-use/on-the-web/styling/icons-in-a-list):

```html
<fa-icon icon="spinner" list-item></fa-icon>
```

[Rotate](https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons):

```html
<fa-icon icon="spinner" rotation="90"></fa-icon>
<fa-icon icon="spinner" rotation="180"></fa-icon>
<fa-icon icon="spinner" rotation="270"></fa-icon>
```

Flip horizontally, vertically, or both:

```html
<fa-icon icon="spinner" flip="horizontal"></fa-icon>
<fa-icon icon="spinner" flip="vertical"></fa-icon>
<fa-icon icon="spinner" flip="both"></fa-icon>
```

Spin and pulse [animation](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons):

```html
<fa-icon icon="spinner" spin></fa-icon> <fa-icon icon="spinner" pulse></fa-icon>
```

[Border](https://fontawesome.com/how-to-use/on-the-web/styling/bordered-pulled-icons):

```html
<fa-icon icon="spinner" border></fa-icon>
```

[Pull left or right](https://fontawesome.com/how-to-use/on-the-web/styling/bordered-pulled-icons):

```html
<fa-icon icon="spinner" pull="left"></fa-icon>
<fa-icon icon="spinner" pull="right"></fa-icon>
```

[Swap opacity](https://fontawesome.com/how-to-use/on-the-web/styling/duotone-icons) (duotone icons only):

```html
<fa-icon icon="stroopwafel"></fa-icon>
<fa-icon icon="stroopwafel" swap-opacity></fa-icon>
```

#### Advanced

[Power Transforms](https://fontawesome.com/how-to-use/on-the-web/styling/power-transforms):

```html
<fa-icon icon="spinner" transform="shrink-6 left-4"></fa-icon>
```

[Masking](https://fontawesome.com/how-to-use/on-the-web/styling/masking):

```html
<fa-icon icon="coffee" mask="circle"></fa-icon>
```

[Symbols](https://fontawesome.com/how-to-use/on-the-web/advanced/svg-symbols):

```html
<fa-icon icon="edit" symbol></fa-icon>
<fa-icon icon="edit" symbol="edit-icon"></fa-icon>
```

[Layers](https://fontawesome.com/how-to-use/on-the-web/styling/layering):

Simple

```html
<span class="fa-layers fa-fw">
  <fa-icon icon="square"></fa-icon>
  <fa-icon icon="check" inverse transform="shrink-6"></fa-icon>
</span>
```

With text

```html
<span class="fa-layers fa-fw" style="background:MistyRose">
  <fa-icon icon="certificate"></fa-icon>
  <fa-text inverse transform="shrink-11.5 rotate--30" style="font-weight:900"
    >NEW</fa-text
  >
</span>
```

With counter

```html
<span class="fa-layers fa-fw" style="background:MistyRose">
  <fa-icon icon="envelope"></fa-icon>
  <fa-counter style="background:Tomato">1,419</fa-counter>
</span>
```

### Copyright

2019 - Luiz Américo Pereira Câmara

Ported from [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
