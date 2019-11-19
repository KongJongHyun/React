import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { red, orange } from '@material-ui/core/colors';
import App from './App';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { makeStyles } from '@material-ui/styles';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const style = makeStyles({
  layout: {
    padding: 0,
    maxWidth: 640,
    maginBottom: 0
  }
});

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: orange
  },
  status: {
    danger: red
  }
});
export default theme;

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
