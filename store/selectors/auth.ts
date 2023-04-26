import type { RootState } from '..';
import { AuthState } from '../slices/auth';
import { User } from '../types';

export const getAuthStore = (state: RootState): AuthState => state.auth;
export const getUserStore = (state: RootState): User | null | undefined =>
  state.auth.user;
