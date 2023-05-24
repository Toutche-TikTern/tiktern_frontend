'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
  'users/getAllUsers',
  async (thunkApi) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users?_limit=5'
    );
    const data = response.json();
    return data;
  }
);
// types
interface StateTypes {
  entities: any;
  value: number;
}
const initialState: StateTypes = {
  entities: [],
  value: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.entities.push(...action.payload);
    });
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
