import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'theme',
  initialState: {
    value: "light",
  },
  reducers: {
    darken: state => {
    
      state.value = "dark";
    },
    lighten: state => {
      state.value = "light";
    },
   
  },
});

export const { darken, lighten} = slice.actions;


export const selectTheme = state => state.theme.value;

export default slice.reducer;
