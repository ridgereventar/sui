import React from 'react'

import { ThemeContextProvider, Button } from 'sui-ui'
import testData from './testData.json';
import 'sui-ui/dist/index.css'

const App = () => {
  return (
    <ThemeContextProvider value={testData}>
      <Button/>
    </ThemeContextProvider>
  )
}

export default App
