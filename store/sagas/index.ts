import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import usersSaga from './usersSaga';

function* rootSaga(): Generator {
  yield all([fork(authSaga), fork(usersSaga)]);
}

export default rootSaga;
