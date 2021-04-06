import React, { useState} from 'react'
import {GlobalStyle} from './Styles/Styles'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Styles/theme";

import Soundcourse from './Soundcourse'
import Splashscreen from './Components/Splashscreen'




const App = () => {
  const [showApp, setShowApp] = useState(false)

  setTimeout(() => {
    setShowApp(true)
  }, 1000);

  return (
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    {
      showApp ? <Soundcourse/> : <Splashscreen/>
    }
    </ThemeProvider>
  )
}

export default App
