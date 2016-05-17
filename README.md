# React Dripr.io - Viewer

[![npm package][npm-badge]][npm]

This is a simple viewer for files uploaded to https://dripr.io
At the moment, as a test it supports just images.

It wants to be a ReactJS implementation of https://github.com/DevAlien/dripr-embed

[![Dripr.io Image for react](https://files.dripr.io/c228885e-4711-488f-8009-6f2b2ac851eb.png)](https://dripr.io/file/V1DyoJNzW)

# Installation
The easiest way to use *react-dripr-viewer* is to install it from npm and include it in your React build process (using [Webpack](http://webpack.github.io/), [Browserify](http://browserify.org/), etc).

```
npm install --save react-dripr-viewer
```

## Usage

Simply import/require the module `react-dripr-viewer` and specify a `fileId` prop.

And load the css `/styles/style.css` somehow.

## Example
```js
import React from 'react';
import ReactDOM from 'react-dom';
import DriprViewer from 'react-dripr-viewer';
import 'react-dripr-viewer/styles/style.css';

ReactDOM.render(
    <DriprViewer fileId="EJar82-zW"/>,

    document.querySelector('.app')
);
```

## Features
- `fileId` - The only mandatory field is the fileId which is the has of the file you want to show.
- `apiKey` - If you have files that can be accessed just with your account you need a [Dripr](https://dripr.io) API key which you can find in your user page.
- `baseUrl` - The base URL of [Dripr](https://dripr.io), it defaults to `https://dripr.io`.
- `baseApiUrl` - The base URL of [Dripr](https://dripr.io) APIs, it defaults to `https://api.dripr.io`.
- `width` - You can set a different width for the file you want to show, it defaults to: `400px`.
- `height` - You can set a different height for the file you want to show, it default to: `300px`.

[npm-badge]: https://img.shields.io/npm/v/react-dripr-viewer.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-dripr-viewer
