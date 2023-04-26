import type { RootState } from '..';
import { User } from '../types';

const getUsersStore = (state: RootState): User[] => state.users.users;

export default getUsersStore;
