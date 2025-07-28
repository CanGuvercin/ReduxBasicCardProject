import {createSlice, CreateStore} from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {cartIsVisible: false},
    reducers: { //vitesler
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const uiActions = createSlice.actions;

export default uiSlice;
