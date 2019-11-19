import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Box,
  Typography,
  TextField,
  Container
} from '@material-ui/core';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const Register = ({ setAlert, register, isAuthenticated }) => {
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="/">
          Goyang Mice On
        </Link>
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger', 3000);
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={e => onSubmit(e)} noValidate>
            <TextField
              type="text"
              name="name"
              value={name}
              variant="outlined"
              fullWidth
              label="name"
              helperText=""
              placeholder="Name"
              className={classes.textField}
              margin="normal"
              onChange={e => onChange(e)}
            />

            <TextField
              type="email"
              name="email"
              value={email}
              variant="outlined"
              fullWidth
              label="email"
              helperText="This site uses Gravatar so if you want a profile image, use a Gravatar email"
              placeholder="Email Address"
              className={classes.textField}
              margin="normal"
              onChange={e => onChange(e)}
            />

            <TextField
              type="password"
              name="password"
              value={password}
              variant="outlined"
              fullWidth
              label="password"
              helperText=""
              placeholder="password"
              className={classes.textField}
              margin="normal"
              onChange={e => onChange(e)}
            />

            <TextField
              type="password"
              name="password2"
              value={password2}
              variant="outlined"
              fullWidth
              label="password"
              helperText=""
              placeholder="Confirm Password"
              className={classes.textField}
              margin="normal"
              onChange={e => onChange(e)}
            />

            <Button
              style={{ backgroundColor: 'orange' }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
                Sign Up
            </Button>
            <Grid container>
              <Grid item xs />
              <Grid item>
                <Link to="/login" variant="body2">
                  {'Already have an account? Sign In'}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
