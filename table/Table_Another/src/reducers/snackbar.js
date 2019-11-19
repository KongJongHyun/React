import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case OPEN_SNACKBAR:
      return [...state, payload];
    case CLOSE_SNACKBAR:
      return state.filter(Snackbar => Snackbar.id !== payload);
    default:
      return state;
  }
}
