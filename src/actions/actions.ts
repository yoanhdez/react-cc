import { User } from '../global';

export const ADD_USER = 'ADD_USER';
export const ADD_USERS = 'ADD_USERS';

export const addUser = (user: User) => ({
  type: ADD_USER,
  payload: user,
});

export const addUsers = (users: User[]) => ({
  type: ADD_USERS,
  payload: [...users],
});