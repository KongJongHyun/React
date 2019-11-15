import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BottomNavbar from './components/layout/BottomNavbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import { CssBaseline, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import Test from './components/layout/Test';

//Redux
import store from './store';
import { loadUser } from './actions/auth';
import { makeStyles } from '@material-ui/styles';
import Snackbar from './components/layout/Snackbar';
import { SnackbarProvider } from 'notistack';
import { connect } from 'react-redux';

// Internationalization
import { IntlProvider, FormattedMessage } from 'react-intl';
import languageObject from './utils/messages';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/dist/locale-data/en'; // Add locale data for en
import '@formatjs/intl-relativetimeformat/dist/locale-data/ko'; // Add locale data for ko

const Main = ({ locale }) => {
  const style = makeStyles({
    layout: {
      padding: 0,
      maxWidth: 640,
      maginBottom: 0
    }
  });

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router basename="/">
      <IntlProvider locale={locale} messages={languageObject[locale]}>
        <CssBaseline />
        <Route exact path="/" component={Test} />
        {/* <Container maxWidth="sm"> */}
        {/* <SnackbarProvider
            maxSnack={10}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          > */}
        {/* <Navbar /> */}

        {/* <section> */}
        {/* <Alert /> */}
        {/* <Snackbar /> */}
        {/* <Switch> */}
        {/* <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/test" component={Test} /> */}
        {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
        {/* <Redirect from="/" to="/login" /> */}
        {/* </Switch> */}
        {/* </section>
          <BottomNavbar className={style.layout} /> */}
        {/* </SnackbarProvider> */}
        {/* </Container> */}
      </IntlProvider>
    </Router>
  );
};

Main.propTypes = {
  locale: PropTypes.string
};

const mapStateToProps = state => ({ locale: state.locale.locale });

export default connect(mapStateToProps)(Main);
