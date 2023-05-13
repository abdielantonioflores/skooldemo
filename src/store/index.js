import { configureStore } from '@reduxjs/toolkit'
import userAuth from '../slices/slice.user.auth'
import configSliceApp from '../slices/slice.config.data'
export default configureStore({
  reducer: {
    userAuth,
    configSliceApp
  },
})