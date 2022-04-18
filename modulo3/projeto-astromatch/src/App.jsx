
import React from 'react'
import Card from './components/Card/Card'
import Info from './components/Info/Info'
import Like from './components/Like/Like'

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./constants/theme";

function App() {
  return (
   	 <ThemeProvider theme={theme}>
<Card/>
<Info/>
<Like/>
  </ThemeProvider>
  )
}

export default App