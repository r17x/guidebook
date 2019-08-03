import React from 'react';
import App from './App';
import { render } from "react-dom";
import constants from 'constants.js'
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, DefaultTheme, StyleReset } from 'atomize';

const domElement = document.getElementById('root') 

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'black',
  },
};


const Application = () => (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <App />
    </ThemeProvider>
)

if(constants.isDevelopment){
    const { unstable_Profiler: Profiler }  = React 
    const trace = require( "scheduler/tracing").unstable_trace 
    const count = {
        mount: 0,
        update: 0,
    }
    trace("initial render", performance.now(), () =>{
        const onRender = (x,y) => {
            count[y]++ 
            console.info(x,y, count[y])
        } 
        return render(
            <Profiler id="Application" onRender={onRender}>
              <Application  />
            </Profiler>,
            domElement
        ) 
    })
}
else render(<Application />, domElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
