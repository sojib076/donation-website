
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AuthState {
  user: { id: string; name: string ,role:string} | null;
  isAuthenticated: boolean;
  loading: boolean;

}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {   
    loginSuccess(state, action: PayloadAction<{ id: string; name: string ,role:string}>) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
   
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
     
    },
    setUserLoading(state, action: PayloadAction<boolean>) {
        state.loading = action.payload;
    },
  },
});

// Export the actions
export const {  loginSuccess, logout ,setUserLoading} = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
