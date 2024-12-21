import { configureStore } from '@reduxjs/toolkit'
import SharedState  from "./slices/shared.js"

export default configureStore({
  reducer: {
    shared: SharedState
  },
})