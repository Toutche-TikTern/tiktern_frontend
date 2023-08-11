import { createSlice } from '@reduxjs/toolkit';

type StateTypes = {
  theme: boolean;
  sidebar: boolean;
};
const initialState: StateTypes = {
  theme: false,
  sidebar: false,
};

const togglesSlice = createSlice({
  name: 'toggles',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.sidebar = !state.sidebar;
    },
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
});

export const { toggleTheme, toggleSidebar } = togglesSlice.actions;

export default togglesSlice.reducer;
