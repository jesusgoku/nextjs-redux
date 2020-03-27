import { combineReducers } from '@reduxjs/toolkit';

import { reducer as count } from './count';

export default combineReducers({
  count,
});
