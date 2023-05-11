

import { createSlice, PayloadAction } from '@reduxjs/toolkit'




export interface AuthState {
  email: string | null;
  name: string | null;
  
}

const initialState = {
  email: "",
  name: "",



}


export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {




    setUserInfo: (state, action:PayloadAction<{ name: string; email: string }>) => {
      state.email = action.payload.email
      state.name = action.payload.name
    },
    unsetUserInfo: (state, action) => {
      state.email = action.payload.email
      state.name = action.payload.name
    },
  }
})

export const { setUserInfo, unsetUserInfo } = userSlice.actions

export default userSlice.reducer
