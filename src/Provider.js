import React from 'react'
import { ThemeProvider, DefaultTheme, StyleReset } from 'atomize'
import { StateProvider } from '@evilfactory/global-state'
import AppReducer from 'reducer.js'
import constants from 'constants.js'

const initialState = constants.isDevelopment
  ? {
      property: [{ name: 'BNB Me', address: 'St part' }],
      drawer: { isOpen: false, children: null, onClose: () => {} }
    }
  : {
      property: [],
      drawer: { isOpen: false, children: null, onClose: () => {} }
    }

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'black'
  }
}

export default function Povider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <StateProvider initialState={initialState} reducer={AppReducer}>
        {children}
      </StateProvider>
    </ThemeProvider>
  )
}
