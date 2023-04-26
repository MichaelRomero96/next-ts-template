import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  User,
  LoginUserFormData,
  LoginResponseData,
  AuthLoadStates,
} from '../types';

export interface AuthState {
  user: User | null | undefined;
  status: AuthLoadStates;
  msg: string;
}

const initialState: AuthState = {
  user: null,
  status: AuthLoadStates.NOT_LOADED,
  msg: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    init(state) {
      state.status = AuthLoadStates.INIT;
    },
    setUnlogged(state) {
      state.status = AuthLoadStates.UNLOGGED;
    },
    loginAction(state, _action: PayloadAction<LoginUserFormData>) {
      state.status = AuthLoadStates.LOADING;
    },
    loginSuccess(state, action: PayloadAction<LoginResponseData>) {
      state.status = AuthLoadStates.SUCCESS;
      state.user = action.payload.userData;
      state.msg = action.payload.msg;
    },
    loginError(state, action: PayloadAction<string>) {
      state.status = AuthLoadStates.ERROR;
      state.user = null;
      state.msg = action.payload;
    },
    logout(state) {
      state.status = AuthLoadStates.UNLOGGED;
      state.user = null;
    },
    recoverSession(state, action: PayloadAction<User>) {
      state.status = AuthLoadStates.SUCCESS;
      state.user = action.payload;
    },
  },
});

export const {
  loginAction,
  loginSuccess,
  loginError,
  recoverSession,
  logout,
  init,
  setUnlogged,
} = authSlice.actions;

export default authSlice.reducer;
