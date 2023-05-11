
import { createSlice, PayloadAction } from '@reduxjs/toolkit'




export interface AuthState {

  FriendName: string | null;
  Compatiblity: string | null;
}

const initialState = {

  FriendName: "",
  Compatiblity:""

}


export const userSlice = createSlice({
  name: 'user_model',
  initialState,
  reducers: {

    setalluserPredict: (state, action:PayloadAction<{ FriendName:string,Compatiblity:string}>) => {
      state.FriendName = action.payload.FriendName;
      state.Compatiblity = action.payload.Compatiblity;

      

    },
    defaultState: (state) => {
      state = initialState;
    },


  }
})

export const { setalluserPredict } = userSlice.actions

export default userSlice.reducer
