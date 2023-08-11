'use client';
import { axiosClient } from '@/utils/axiosInstance';
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

// fetch current user details
export const fetchCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async () => {
    try {
      const { data: user } = await axiosClient.get('/user/curr-user', {
        withCredentials: true,
      });
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user?.user));
      return user;
    } catch (error) {
      console.log('Error in fetching current user');
    }
  }
);
// types
interface StateTypes {
  loading: boolean;
  userInfo: {};
  error: string | boolean | {} | null;
  success: boolean;
}
const initialState: StateTypes = {
  loading: false,
  userInfo: {}, // for user object
  error: null,
  success: false, // for monitoring the registration process.
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    //? *****************__GET_CURRENT_USER****************
    builder.addCase(fetchCurrentUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
      if (payload?.success) {
        state.userInfo = payload?.user;
        state.success = true;
        state.loading = false;
        state.error = null;
      } else {
        state.userInfo = {};
        state.success = false;
        state.loading = false;
        state.error = payload?.message;
      }
    });
    builder.addCase(fetchCurrentUser.rejected, (state, { error }) => {
      state.userInfo = {};
      state.success = false;
      state.loading = false;
      state.error = error;
    });
  },
});

// export const {  } = userSlice.actions;

export default userSlice.reducer;
