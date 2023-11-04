import { createSlice } from '@reduxjs/toolkit';

import {
  checkAuth,
  login,
  logout,
  register,
} from '@/store/user/user.actions';
import { IInitialState } from '@/store/user/user.interface';

import { getUserFromStorage } from '@/services/auth/auth.helper';

//TODO Под вопросом 3:41
const initialState: IInitialState = {
  user: getUserFromStorage(),
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })

      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
      });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
