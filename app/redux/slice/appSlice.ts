import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HYDRATE } from 'next-redux-wrapper';

export interface IInitialState {
  counter: number;
}

const initialState: IInitialState = {
  counter: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<number>) => {
      state.counter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE as any, (state: IInitialState, action) => {
      if (action.payload) {
        state.counter = action.payload.app.counter;
      }
    });
  },
});

export const { setCounter } = appSlice.actions;
export default appSlice.reducer;
