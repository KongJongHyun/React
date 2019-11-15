import { CHANGE_LOCALE } from './types';

export default locale => {
  return { type: CHANGE_LOCALE, locale };
};
