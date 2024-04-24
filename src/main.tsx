import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyle } from './styles/global-style'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
      <GlobalStyle theme={defaultTheme} />
    </ThemeProvider>
  </React.StrictMode>,
)
