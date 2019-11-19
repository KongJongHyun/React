import uuid from 'uuid';
import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from './types';

export const setSnackbar = (msg, snackbarType, timeout = 100) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: OPEN_SNACKBAR,
    payload: { msg, snackbarType, id, openAt: true }
  });

  setTimeout(
    () => dispatch({ type: CLOSE_SNACKBAR, payload: id, openAt: false }),
    timeout
  );
};
