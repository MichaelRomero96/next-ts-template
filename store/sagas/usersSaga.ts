import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError, AxiosResponse } from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import axiosClient from '../../api/rest/axiosClient';
import {
  UserBase,
  LoadStates,
  User,
  UsersResponseBase,
  UsersResponseData,
} from '../types';
import {
  createUser,
  createUserError,
  createUserSuccess,
  deleteUser,
  deleteUserError,
  deleteUserSuccess,
  editUser,
  editUserError,
  editUserSuccess,
  loadUsers,
  loadUsersError,
  loadUsersSuccess,
  UsersActions,
} from '../slices/users';

function* getUsersSaga(): Generator {
  try {
    const response = yield call(async (): Promise<User[]> => {
      try {
        const res = await axiosClient.get('/users');
        const responseData = res.data as unknown as UsersResponseData;
        if (responseData) {
          return await Promise.resolve(responseData.users);
        }
        throw Error();
      } catch (e) {
        const error = e as AxiosError;
        if (error.response) {
          return Promise.resolve([]);
        }
        return Promise.resolve([]);
      }
    });
    if (!response) throw Error();
    const responseData = response as unknown as User[];
    yield put(loadUsersSuccess(responseData));
  } catch (e) {
    yield put(loadUsersError());
  }
}

function* createUserSaga(action: PayloadAction<UserBase>): Generator {
  try {
    const userData = action.payload;
    const response = yield call(async (): Promise<UsersResponseBase> => {
      try {
        const res: AxiosResponse<UsersResponseBase> = await axiosClient.post(
          '/users',
          userData
        );
        if (!res) throw Error();
        return await Promise.resolve(res.data);
      } catch (e) {
        const error = e as AxiosError;
        return Promise.resolve(error.response?.data as UsersResponseBase);
      }
    });
    if (!response) throw Error();
    const responseData = response as UsersResponseBase;
    if (responseData.status === LoadStates.ERROR)
      throw new Error(responseData.msg);
    yield put(createUserSuccess(responseData.msg));
    yield getUsersSaga();
  } catch (e) {
    const errorMessage = e as string;
    yield put(createUserError(errorMessage));
  }
}

function* editUserSaga(action: PayloadAction<User>): Generator {
  try {
    const userData = action.payload;
    const response = yield call(async (): Promise<UsersResponseBase> => {
      try {
        const res: AxiosResponse<UsersResponseBase> = await axiosClient.put(
          `/users/${userData.id}`,
          userData
        );
        if (!res) throw Error();
        return await Promise.resolve(res.data);
      } catch (e) {
        const error = e as AxiosError;
        return Promise.resolve(error.response?.data as UsersResponseBase);
      }
    });
    if (!response) throw Error();
    const responseData = response as UsersResponseBase;
    if (responseData.status === LoadStates.ERROR)
      throw new Error(responseData.msg);
    yield put(editUserSuccess(responseData.msg));
    yield getUsersSaga();
  } catch (e) {
    const errorMessage = e as string;
    yield put(editUserError(errorMessage));
  }
}

function* deleteUserSaga(action: PayloadAction<string>): Generator {
  try {
    const userId = action.payload;
    const response = yield call(async (): Promise<UsersActions | string> => {
      try {
        const res = await axiosClient.delete(`/users/${userId}`);
        if (res) {
          return await Promise.resolve(res.data);
        }
        throw Error();
      } catch (e) {
        const error = e as AxiosError<UsersActions>;
        if (error.response) {
          return Promise.resolve(error.response.data);
        }
        return Promise.resolve(error.message);
      }
    });
    if (!response) throw Error();
    const responseData = response as unknown as UsersActions;
    if (responseData.status === LoadStates.ERROR) {
      throw new Error(responseData.msg);
    }
    yield put(deleteUserSuccess(responseData.msg));
    yield getUsersSaga();
  } catch (e) {
    const error = e as unknown as string;
    yield put(deleteUserError(error));
  }
}

function* usersSaga(): Generator {
  yield all([
    takeEvery(createUser, createUserSaga),
    takeEvery(editUser, editUserSaga),
    takeEvery(deleteUser, deleteUserSaga),
    takeEvery(loadUsers, getUsersSaga),
  ]);
}

export default usersSaga;
