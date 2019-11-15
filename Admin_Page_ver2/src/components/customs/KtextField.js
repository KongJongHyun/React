import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  multilineColor: {
    color: 'black'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'orange !important'
  },
  floatingLabelFocusStyle: {
    color: 'orange'
  },
  inputLabel: {
    '&$focused': {
      color: 'orange'
    }
  },
  cssOutlinedInput: {
    '&$focused $notchedOutline': {
      borderWidth: '1px',
      borderColor: 'orange'
    }
  },
  focused: {},
  cssInputFocused: {
    color: 'orange'
  }
}));

const KtextField = ({
  name,
  onChange,
  id = null,
  label = '',
  autoFocus = false,
  required = false,
  helperText = '',
  value = '',
  type = 'text',
  error = false,
  multiline = false,
  autoComplete = ''
}) => {
  const classes = useStyles();

  return (
    <TextField
      type={type}
      id={id}
      name={name}
      helperText={helperText}
      value={value}
      error={error}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      variant="outlined"
      onChange={onChange}
      fullWidth
      label={label}
      InputProps={{
        className: classes.multilineColor,
        classes: {
          notchedOutline: classes.notchedOutline
        }
      }}
      InputLabelProps={{
        classes: {
          root: classes.inputLabel,
          focused: classes.focused
        },
        className: classes.floatingLabelFocusStyle
      }}
      multiline={multiline}
      margin="normal"
      required={required}
    />
  );
};

export default KtextField;
