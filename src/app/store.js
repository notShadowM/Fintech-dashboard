import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import bigChartReducer from '../features/bigChart/bigChartSlice';
import languagesReducer from '../features/languages/languages';
import successfulReducer from '../features/successful/successfulSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    bigChart: bigChartReducer,
    languages: languagesReducer,
    successful: successfulReducer,
  },
});
