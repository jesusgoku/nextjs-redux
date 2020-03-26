import { combineReducers } from '@reduxjs/toolkit';

import countSlice from './count';

export default combineReducers({
  count: countSlice.reducer,
});
