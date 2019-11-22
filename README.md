# wc-fontawesome

Web component integration with Font Awesome (v5)

> Ported from [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)

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
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
```

```html
<link
  rel="stylesheet"
  href="../node_modules/@fortawesome/fontawesome-svg-core/styles.css"
/>

<fa-icon icon="spinner"></fa-icon>
```

Look at the [example](example/index.html) that shows FontAwesome features. 

> Needs to run on a local server with Chrome (due to importmap support)

### Features

The following features are available as part of Font Awesome

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
<fa-icon icon="stroopwafel" swap-ppacity></fa-icon>
```

Your own class names:

```html
<fa-icon icon="spinner" className="highlight"></fa-icon>
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

```html
<span className="fa-layers fa-fw">
  <fa-icon icon="square" color="green"></fa-icon>
  <fa-icon icon="check" inverse transform="shrink-6"></fa-icon>
</span>
```

### Copyright

2019 - Luiz Américo Pereira Câmara

Proted from [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
