import { createSlice } from '@reduxjs/toolkit';

export const successfulSlice = createSlice({
  name: 'bigChart',
  initialState: {
    successful: 150,
    unsuccessful: 20,
  },
  reducers: {
    changeSuccessful: (state, action) => {
      state.successful = action.payload;
    },
    changeUnsuccessful: (state, action) => {
      state.unsuccessful = action.payload;
    },
  },
});

export const { changeSuccessful, changeUnsuccessful } = successfulSlice.actions;

export default successfulSlice.reducer;
