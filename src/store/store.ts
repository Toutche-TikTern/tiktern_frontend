'use client';

import { configureStore } from '@reduxjs/toolkit';
import togglesReducer from './features/togglesSlice';
import userReducer from './features/userSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      toggles: togglesReducer,
    },
    devTools: true,
  });

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
