import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { FormattedMessage, injectIntl } from 'react-intl';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import changeLocale from '../../actions/locale';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const Navbar = ({
  changeLocale,
  auth: { isAuthenticated, loading },
  logout,
  intl
}) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    locale: '',
    name: 'hai'
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
    changeLocale(event.target.value);
  };

  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard">
          <i></i> <span>Dashboard</span>
        </Link>
      </li>
      <li>
        <a href="#!" onClick={logout}>
          <i></i> <span>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="#!">Developers</Link>
      </li>
      <li>
        <Link to="/register">{intl.formatMessage({ id: 'login.signup' })}</Link>
      </li>
      <li>
        <Link to="/login">{intl.formatMessage({ id: 'login.signin' })}</Link>
      </li>
    </ul>
  );

  return (
    <nav>
      <h1>
        <Link to="/">
          <i></i> DevConnector
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-locale-native-simple">
          <FormattedMessage id="locale" defaultMessage="Default message" />
        </InputLabel>
        <Select
          native
          value={state.locale}
          onChange={handleChange('locale')}
          labelWidth={labelWidth}
          inputProps={{
            name: 'locale',
            id: 'outlined-locale-native-simple'
          }}
        >
          <option value="ko">{intl.formatMessage({ id: 'locale.ko' })}</option>
          <option value="en">{intl.formatMessage({ id: 'locale.en' })}</option>
        </Select>
      </FormControl>
    </nav>
  );
};

Navbar.propTypes = {
  changeLocale: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default injectIntl(
  connect(
    mapStateToProps,
    { logout, changeLocale }
  )(Navbar)
);
