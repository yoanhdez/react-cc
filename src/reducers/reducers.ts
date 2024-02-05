import { ADD_USER, ADD_USERS } from "../actions/actions";
import { User } from "../global";

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        users: [...state.users, action.payload]
      })
    case ADD_USERS:
      return Object.assign({}, state, {
        users: [...action.payload]
      })
    default:
      return state;
  }
};

export default userReducer;
