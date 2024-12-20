import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: "lives"
}

export const SharedState = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    }
  },
})

export const { setPage } = SharedState.actions

export default SharedState.reducer;