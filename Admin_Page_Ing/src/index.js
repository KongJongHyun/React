import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Router, Route, browserHistory, IndexRoute } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#ee772a'},
        secondary: { main: '#ee772a'},
    },
    status: {
        danger: { main: '#ee772a'},
    }
});

ReactDOM.render(<MuiThemeProvider theme = {theme} ><App /> </MuiThemeProvider>, document.getElementById('app'));
