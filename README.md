# Bootstrap Font Picker 2

A font picker component supporting Google and system fonts, powered by Bootstrap.

## Table of Contents

- [Bootstrap Font Picker 2](#bootstrap-font-picker-2)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Installation](#installation)
    - [IIFE Bundle](#iife-bundle)
    - [ESM Bundle](#esm-bundle)
  - [Getting started](#getting-started)
  - [Documentation](#documentation)
  - [Demo](#demo)
  - [Developing](#developing)

## Features

- ❤️ Favourites
- ⌨️ Keyboard shortcuts
- ⚡ Dynamic font loading
- 🔤 Custom font support
- 🔎 Fuzzy search
- 📐 Advanced metrics filters
- 📶 Property sorting
- 🇳🇱 Translations for English, Dutch, German, Spanish and French
- 💪 No JQuery, just pure ES6

## Screenshots

|            |                         Light                          |                         Dark                          |
| :--------- | :----------------------------------------------------: | :---------------------------------------------------: |
| **Button** | <img src="screenshots/button-light.png" width="200" /> | <img src="screenshots/button-dark.png" width="200" /> |
| **Dialog** | <img src="screenshots/dialog-light.png" width="300" /> | <img src="screenshots/dialog-dark.png" width="300" /> |

## Installation

Although the FontPicker is built on Bootstrap, it does require a tiny stylesheet.
Please include it like this:

```html
<link rel="stylesheet" href="fontpicker.css" />
```

It is also **highly recommended** to include a preconnect to Google fonts:

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
```

Now, depending on your environment, choose one of the following:

- [IIFE Bundle](#iife-bundle) → When using vanilla JavaScript, without ES modules
- [ESM Bundle](#esm-bundle) → When using ES modules or a bundler

### IIFE Bundle

Please import the IIFE script using a `script` tag in your HTML:

```html
<script src="fontpicker.iife.js"></script>
```

This exposes the `FontPicker` and `FontLoader` classes (on window).

### ESM Bundle

Please import the ESM bundle using the `import` directive in your script:

```js
import { FontPicker, FontLoader } from 'fontpicker.js'
```

This allows you to use `FontPicker` and `FontLoader` directly.

## Getting started

To create a font picker, first create a button element:

```html
<button id="picker"></button>
```

Next instantiate the FontPicker, passing a button element and (optional) configuration:

```js
const button = document.querySelector('#picker')
const picker = new FontPicker(button, {
  language: 'en',
  font: 'Open Sans',
  defaultSubset: 'latin',
})
```

The picker's configuration can be changed after initialization. This is done by calling `.initialize({...})` on the element:

```js
picker.configure({
  language: 'nl',
})
```

The picker's various methods and properties can also be accessed directly on the element:

```js
// Set the current font
picker.setFont('Roboto:800')

// Handle events
picker.on('pick', (font) => { ... })

// Open the FontPicker, which returns a promise!
const font = await picker.open()
```

## Documentation

**For all methods and properties, please view the complete [documentation](DOCUMENTATION.md).**

## Demo

A minimal example can be found in the [demo](/demo) directory.

## Developing

To install dependencies:

```bash
bun|deno|npm|pnpm|yarn install
```

To run:

```bash
bun|deno|npm|pnpm|yarn run dev
```
