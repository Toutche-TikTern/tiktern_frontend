// @ts-nocheck
import { axiosClient } from '@/utils/axiosInstance';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteCookie, hasCookie, setCookie } from 'cookies-next';

const initialState = {
  loading: false,
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
  userCreated: null,
};

// login user async action
export const loginUser = createAsyncThunk(
  'auth/login',
  // @ts-ignore
  async ({ email, password, router }, thunkAPI) => {
    try {
      console.log({ email, password });
      const { data: user } = await axiosClient.post(`/auth/login`, {
        email,
        password,
      });
      // setCookie('token', user?.access_token);
      setCookie('role', user?.roles[0]);
      // localStorage.setItem('token', user?.access_token);
      if (user?.roles.includes('admin')) {
        router.push('/admin');
        console.log('go admin');
      } else {
        router.push('/user');
        console.log('go user');
      }
      return user;
    } catch (error) {
      // return custom error message from backend if present
      console.log(error);
      return error;
    }
  }
);

// register user action
export const registerUser = createAsyncThunk(
  'auth/register',
  // @ts-ignore
  async ({ email, password, router }, thunkAPI) => {
    const payload = {
      email,
      password,
    };
    try {
      // register user expected roles
      const { data: user } = await axiosClient.post('/user', payload);
      if (user.success) router.push('/auth/login');
      return { user, email };
    } catch (error) {
      console.log('Error in register the user::', error);
    }
  }
);

// logout user action-->
export const logoutUser = createAsyncThunk(
  'auth/logout',
  // @ts-ignore
  async ({ router }, thunkAPI) => {
    const isToken = hasCookie('role');

    console.log(isToken);
    try {
      if (isToken) {
        const { data: user } = await axiosClient.post('/auth/logout');
        if (user.success) {
          deleteCookie('role');
          deleteCookie('token');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          router.push('/auth/login');
          return user;
        }
      }
    } catch (error) {
      console.log('Error in logout the user::', error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //? *****************_LOGIN_USER**********************
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.success) {
        const token = action.payload?.access_token;
        state.userToken = token;
        state.loading = false;
        state.error = null;
        state.success = true;
      } else {
        state.loading = false;
        state.error = action.payload?.message;
        state.success = false;
      }
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.error = payload?.message;
      state.loading = false;
      state.success = false;
    });
    //? *****************_REGISTER_USER**********************
    builder.addCase(registerUser.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      // @ts-ignore
      if (payload?.success) {
        state.loading = false;
        state.success = true;
        // @ts-ignore
        state.userCreated = true;
      }
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.error = payload.message;
      state.success = false;
      state.userCreated = false;
      state.loading = false;
    });
    //? *****************_LOGOUT_USER**********************
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.userToken = null;
      deleteCookie('token');
    });
    builder.addCase(logoutUser.rejected, (state, { payload }) => {
      state.error = payload.message;
      state.loading = false;
      state.success = false;
      state.userToken = null;
    });
  },
});

export default authSlice.reducer;
