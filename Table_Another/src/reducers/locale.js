import { CHANGE_LOCALE } from '../actions/types';

const initialState = { locale: 'ko' };

export default function(state = initialState, action) {
  const { type, locale } = action;

  switch (type) {
    case CHANGE_LOCALE:
      return { ...state, locale };
    default:
      return state;
  }
}
