'use client';

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import togglesReducer from './features/togglesSlice';
import userReducer from './features/userSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      auth: authReducer,
      toggles: togglesReducer,
    },
    devTools: true,
  });

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
