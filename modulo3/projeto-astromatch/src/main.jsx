import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import CssBaseline from '@mui/material/CssBaseline';
import {  ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./constants/theme";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
   
    <App />
    </ThemeProvider>
  </React.StrictMode>
)
