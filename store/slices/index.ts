import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import users from './users';

const rootReducer = combineReducers({
  auth,
  users,
});

const createRootReducer = (
  state: ReturnType<typeof rootReducer> | undefined,
  action: AnyAction
) => {
  return rootReducer(state, action);
};

export default createRootReducer;
