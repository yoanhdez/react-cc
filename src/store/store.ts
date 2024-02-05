import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/reducers';

const store = configureStore({
  reducer: {
    data: userReducer
  },
});

export default store;