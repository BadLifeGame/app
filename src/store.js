import { configureStore } from '@reduxjs/toolkit'
import SharedState  from "./slicers/shared.js"

export default configureStore({
  reducer: {
    shared: SharedState
  },
})