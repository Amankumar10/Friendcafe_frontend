
import { createSlice, PayloadAction } from '@reduxjs/toolkit'




export interface AuthState {

  FriendName: string | null;
  Compatibility : string | null;
}

const initialState = {

  FriendName: "",
  Compatibility :""

}


export const userSlice = createSlice({
  name: 'user_model',
  initialState,
  reducers: {

    setalluserPredict: (state, action:PayloadAction<{ FriendName:string,Compatibility :string}>) => {
      state.FriendName = action.payload.FriendName;
      state.Compatibility  = action.payload.Compatibility ;

      

    },
    defaultState: (state) => {
      state = initialState;
    },


  }
})

export const { setalluserPredict } = userSlice.actions

export default userSlice.reducer
