import { createSlice } from '@reduxjs/toolkit';

export const bigChartSlice = createSlice({
  name: 'bigChart',
  initialState: {
    data: [
      { id: 1, quarter: 'Mar 1 - 7', earnings: 50000 },
      { id: 2, quarter: 'Mar 8 - 14', earnings: 120000 },
      { id: 3, quarter: 'Mar 15 - 21', earnings: 120000 },
      { id: 4, quarter: 'Mar 22 - 28', earnings: 120000 },
      { id: 5, quarter: 'Final wk', earnings: 180000 },
    ],
  },
  reducers: {
    changeValue: (state, action) => {
      state.data.forEach((e) => {
        if (e.id === action.payload.id) {
          e.earnings = action.payload.earnings;
        }
      });
    },
  },
});

export const { changeValue } = bigChartSlice.actions;

export default bigChartSlice.reducer;
