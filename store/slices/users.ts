import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, LoadStates, UserBase } from '../types';

interface UsersState {
  users: User[];
  status: LoadStates;
  actions: UsersActions;
}

export interface UsersActions {
  status: LoadStates;
  msg: string;
}

const initialState: UsersState = {
  users: [],
  status: LoadStates.NOT_LOADED,
  actions: {
    status: LoadStates.NOT_LOADED,
    msg: '',
  },
};

type UserId = string;

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadUsers(state) {
      state.status = LoadStates.LOADING;
    },
    loadUsersError(state) {
      state.status = LoadStates.ERROR;
      state.users = [];
    },
    loadUsersSuccess(state, action: PayloadAction<User[]>) {
      state.status = LoadStates.SUCCESS;
      state.users = action.payload;
    },
    createUser(state, _action: PayloadAction<UserBase>) {
      state.actions.status = LoadStates.LOADING;
    },
    createUserError(state, action: PayloadAction<string>) {
      state.actions.status = LoadStates.ERROR;
      state.actions.msg = action.payload;
    },
    createUserSuccess(state, action: PayloadAction<string>) {
      state.actions.status = LoadStates.SUCCESS;
      state.actions.msg = action.payload;
    },
    editUser(state, _action: PayloadAction<User>) {
      state.actions.status = LoadStates.LOADING;
    },
    editUserError(state, action: PayloadAction<string>) {
      state.actions.status = LoadStates.ERROR;
      state.actions.msg = action.payload;
    },
    editUserSuccess(state, action: PayloadAction<string>) {
      state.actions.status = LoadStates.SUCCESS;
      state.actions.msg = action.payload;
    },
    deleteUser(state, _action: PayloadAction<UserId>) {
      state.actions.status = LoadStates.LOADING;
    },
    deleteUserError(state, action: PayloadAction<string>) {
      state.actions.status = LoadStates.ERROR;
      state.actions.msg = action.payload;
    },
    deleteUserSuccess(state, action: PayloadAction<string>) {
      state.actions.status = LoadStates.SUCCESS;
      state.actions.msg = action.payload;
    },
  },
});

export const {
  loadUsers,
  loadUsersError,
  loadUsersSuccess,
  createUser,
  createUserError,
  createUserSuccess,
  editUser,
  editUserError,
  editUserSuccess,
  deleteUser,
  deleteUserError,
  deleteUserSuccess,
} = usersSlice.actions;

export default usersSlice.reducer;
