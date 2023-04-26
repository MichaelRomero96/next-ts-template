export interface User extends UserBase {
  id: string;
  password?: string;
}

export interface UserBase {
  name: string;
  lastName: string;
  email: string;
  role: string;
}

export interface LoginUserFormData {
  email: string;
  password: string;
}

export enum Roles {
  ADMIN = 'ADMIN',
  STANDARD = 'STANDARD',
}

export enum LoadStates {
  NOT_LOADED,
  ERROR,
  LOADING,
  SUCCESS,
}

export enum AuthLoadStates {
  NOT_LOADED,
  ERROR,
  LOADING,
  SUCCESS,
  INIT,
  UNLOGGED,
}

export interface LoginResponseData {
  status: LoadStates;
  msg: string;
  users?: User[];
  userData?: User;
}

export interface UsersResponseData extends UsersResponseBase {
  users: User[];
}

export interface UsersResponseBase {
  status: LoadStates;
  msg: string;
}

export const LOGIN_STORAGE_KEY = 'userLogin';
