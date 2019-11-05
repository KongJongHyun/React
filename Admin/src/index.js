import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createMuiTheme, MuiThemeProvider, rgbToHex } from '@material-ui/core/styles';

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
