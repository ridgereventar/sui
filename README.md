# sui

> 

[![NPM](https://img.shields.io/npm/v/sui-ui.svg)](https://www.npmjs.com/package/sui-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install @ridgereventar/sui
```

## Usage

```jsx
import React from 'react';
import './App.css';

import {ThemeContextProvider, Button, InputText} from '@ridgereventar/sui';
import '@ridgereventar/sui/dist/index.css';

import theme from './theme.json'; // file from SUi.com

function App() {
  return (
    <ThemeContextProvider value={theme}>
      <h1> Sample Header </h1>
      <Button
        colorIndex={1}
        border={true}/>
    </ThemeContextProvider>
  );
}
```

## License

MIT © [ridgereventar](https://github.com/ridgereventar)
