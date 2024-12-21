import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: "lives",
  // these are stacks btw
  previousUniquePages: ["lives"],
  previousPages: ["lives"]
}

export const SharedState = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setPage: (state, action) => {
      if (action.payload === state.page) {
        state.previousPages.push(state.page);
        return;
      }
      state.previousPages.push(state.page);
      state.previousUniquePages.push(state.page)
      state.page = action.payload;
    },
    goBackToLastPage: (state) => {
      state.page = state.previousUniquePages.pop();
    }
  },
})

export const { setPage, goBackToLastPage } = SharedState.actions

export default SharedState.reducer;