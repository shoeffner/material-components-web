# Bottom Navigation

The [Bottom Navigation component](https://material.io/go/design-bottom-navigation) is yet to be completed, please follow the [tracking issue](https://github.com/material-components/material-components-web/issues/59) for more information.

## `MDCBottomNavigation` Properties and Methods

Method Signature | Description
--- | ---
`setScrollTarget(target: element) => void` | Sets scroll target to different DOM node (default is window).

## Usage within Web Frameworks

If you are using a JavaScript framework, such as React or Angular, you can create a Bottom Navigation for your framework. Depending on your needs, you can use the _Simple Approach: Wrapping MDC Web Vanilla Components_, or the _Advanced Approach: Using Foundations and Adapters_. Please follow the instructions [here](../../docs/integrating-into-frameworks.md).

### `MDCBottomNavigationAdapter`

Method Signature | Description
--- | ---
`addClass(className: string) => void` | Adds a class to the root element of the component.
`removeClass(className: string) => void` | Removes a class from the root element of the component.
`hasClass(className: string) => boolean` | Checks if the root element of the component has the given className.
`setStyle(property: string, value: string) => void` | Sets the specified CSS property to the given value on the root element.
`getHeight() => number` | Gets the height in px of the root element.
`getViewportScrollY() => number` | Gets the number of pixels that the content of body is scrolled from the top of the page.

### Foundations

#### `MDCBottomNavigationFoundation`

All foundations provide the following methods:

Method Signature | Description
--- | ---
`handleTargetScroll() => void` | Handles `scroll` event on specified scrollTarget (defaults to `window`).
