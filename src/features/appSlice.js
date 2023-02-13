import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  roomId: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomId= action.payload.roomId;
    },
    logout: (state) => {
      state.roomId = null;
    }
  },

});

export const { enterRoom, logout } = appSlice.actions;


export const selectRoomId = (state) => state.app.roomId;


export default appSlice.reducer;
