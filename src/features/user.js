import { createSlice } from '@reduxjs/toolkit';

export const UserReducer = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { setUser, logoutUser } = UserReducer.actions;
export default UserReducer.reducer;
