import React from 'react'

import { ThemeContextProvider, Button, InputText } from 'sui'
import theme from './testData.json';
import 'sui/dist/index.css'

const App = () => {
  return (
    <ThemeContextProvider value={theme}>
      <Button theme={theme}/>
      <InputText theme={theme}/>
    </ThemeContextProvider>
  )
}

export default App
