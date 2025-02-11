import { configureStore } from '@reduxjs/toolkit'
import bookingFormReducer from './slices/bookingFormSlice'
import { baseApi } from './apiSlices/baseApi'
import appConfigReducer from './slices/appConfigSlice'

//https://redux-toolkit.js.org/usage/usage-guide#simplifying-store-setup-with-configurestore
export const reduxStore = configureStore({
   reducer: {
      bookingForm: bookingFormReducer,
      appConfig: appConfigReducer,
      [baseApi.reducerPath]: baseApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch
