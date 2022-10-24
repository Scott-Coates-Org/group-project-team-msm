import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from './authSlice';
import counterReducer from './counterSlice';
import usersReducer from './usersSlice';

const reducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  users: usersReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    state = undefined;
  }
  return reducer(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
