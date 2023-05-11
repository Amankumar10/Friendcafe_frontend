import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  name: string | null;
  date_of_birth: string | null;
  token: string | null;
}

const initialState: AuthState = {
  name: null,
  date_of_birth:null,
  token: null,
  
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ name: string; date_of_birth:string; token: string }>
    ) => {
      state.name = action.payload.name;
      state.date_of_birth = action.payload.date_of_birth;


      state.token = action.payload.token;
    },
    defaultState: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, defaultState } = authSlice.actions;

export default authSlice.reducer;












