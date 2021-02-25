import './App.css';
import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import IntroBox from './components/IntroBox'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Oi',
      'cursive',
    ].join(','),
  },});

const mainGridStyle = {
    height: '100vh',
    width: '100vw'
}

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div style={mainGridStyle}>
                <IntroBox />
            </div>
        </ThemeProvider>
    );
}

export default App;
