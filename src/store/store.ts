'use client';

import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice';

export const makeStore = () =>
	configureStore({
		reducer: {
			user: userSlice,
		},
	});

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
