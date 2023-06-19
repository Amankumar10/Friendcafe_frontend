// import { configureStore } from '@reduxjs/toolkit'
// // import cakeReducer from '../features/cake/cakeSlice'
// // import icecreamReducer from '../features/icecream/icecreamSlice'
// import userReducer from '../pages/user/userSlice'
// const store = configureStore({
//   reducer: {
//     // cake: cakeReducer,
//     // icecream: icecreamReducer,
//     user: userReducer,
 
//   }
// })

// export default store
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch



// import { configureStore } from '@reduxjs/toolkit'
// // Or from '@reduxjs/toolkit/query/react'
// import { setupListeners } from '@reduxjs/toolkit/query'
// import { userApi } from '../pages/user/userSlice'

// export const store = configureStore({
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [userApi.reducerPath]: userApi.reducer,
//   },
//   // Adding the api middleware enables caching, invalidation, polling,
//   // and other useful features of `rtk-query`.
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(userApi.middleware),
// })

// // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)









import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from '../pages/api/authApi';
import { friendApi } from '../pages/api/friendApi';

import  authReducer  from "../pages/api/state/authSlice";
import  userReducer  from "../pages/api/state/userSlice";
import  modelReducer from "../pages/api/state/modelSlice";

export const store = configureStore({
  // reducerPath and reducer are created for us, which we can pass straight into the reducer parameter of configureStore.
  reducer: {
    auth: authReducer,
    user_info: userReducer,
    user_model: modelReducer,
    [authApi.reducerPath]: authApi.reducer,
    [friendApi.reducerPath]: friendApi.reducer,

  },

  // middleware is also created for us, which will allow us to take advantage of caching, invalidation, polling, and the other features of RTK Query.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware)
    .concat(friendApi.middleware), 
})

// It will enable to refetch the data on certain events, such as refetchOnFocus and refetchOnReconnect.
setupListeners(store.dispatch)// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);