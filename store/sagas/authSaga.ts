import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import axiosClient from '../../api/rest/axiosClient';
import { loginAction, loginError, loginSuccess, logout } from '../slices/auth';
import { loadUsersSuccess } from '../slices/users';
import {
  LoginUserFormData,
  LoginResponseData,
  LOGIN_STORAGE_KEY,
} from '../types';

const login = async (
  formData: LoginUserFormData
): Promise<LoginResponseData> => {
  try {
    const response = await axiosClient.post('login', formData);
    return await Promise.resolve(response.data as LoginResponseData);
  } catch (e) {
    const error = e as AxiosError;
    return Promise.resolve(error.response?.data as LoginResponseData);
  }
};

function* loginSaga(action: PayloadAction<LoginUserFormData>): Generator {
  let msg = '';
  try {
    const res = yield call(() => login(action.payload));
    const responseData = res as unknown as LoginResponseData;
    msg = responseData.msg;
    const { users, userData } = responseData;

    if (!userData) throw Error();

    yield put(loginSuccess(responseData));
    if (!users) return;
    yield put(loadUsersSuccess(users));
  } catch (error) {
    yield put(loginError(msg));
  }
}

function* logoutSaga(): Generator {
  try {
    yield sessionStorage.removeItem(LOGIN_STORAGE_KEY);
  } catch (e) {
    const { message } = e as Error;
    // eslint-disable-next-line no-console
    console.error(message);
  }
}

function* authSaga(): Generator {
  yield all([takeEvery(loginAction, loginSaga), takeEvery(logout, logoutSaga)]);
}

export default authSaga;
