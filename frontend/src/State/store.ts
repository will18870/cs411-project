import { createSlice, configureStore } from '@reduxjs/toolkit';

interface MyState {
  isTrue: boolean;
}

const initialState: MyState = {
  isTrue: false,
};



export const mySlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    setTrue: (state) => {
      state.isTrue = true;
    },
    setFalse: (state) => {
      state.isTrue = false;
    },
  },
});

export const { setTrue, setFalse } = mySlice.actions;
export const store = configureStore({
  reducer: mySlice.reducer,
});