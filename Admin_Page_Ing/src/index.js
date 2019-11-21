import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Router, Route, browserHistory, IndexRoute } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#ee772a'},
        secondary: { main: '#3d5afe'},
    },
    status: {
        danger: { main: '#ff4444'},
    }
});

ReactDOM.render(<MuiThemeProvider theme = {theme} ><App /> </MuiThemeProvider>, document.getElementById('app'));
