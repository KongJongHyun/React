import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Button } from '@material-ui/core';

const Snackbar = ({ snackbars }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const action = key => (
    <>
      <Button
        onClick={() => {
          closeSnackbar(key);
        }}
      >
        Dismiss
      </Button>
    </>
  );

  useEffect(() => {
    snackbars &&
      snackbars.length > 0 &&
      snackbars.map(snackbar => {
        // https://iamhosseindhv.com/notistack/demos#prevent-duplicate
        const key = enqueueSnackbar(snackbar.msg, {
          variant: 'warning', // 색상
          preventDuplicate: true, // 중복 알림 방지
          autoHideDuration: 1500,
          action
        });
      });
  }, [snackbars]);

  return null;
};

Snackbar.propTypes = {
  snackbars: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  snackbars: state.snackbar
});

export default connect(mapStateToProps)(Snackbar);
