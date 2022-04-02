import { createSlice } from '@reduxjs/toolkit';

export const NotificationsReducer = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
  },
  reducers: {
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

export const { setNotifications } = NotificationsReducer.actions;
export default NotificationsReducer.reducer;
