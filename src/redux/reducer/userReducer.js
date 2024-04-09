import { LOGIN_SUCCESS } from "../actions/Login";
const INITIAL_STATE = {
  account: {
    access_token: "",
    refresh_token: "",
    username: "",
    image: "",
    role: "",
  },
  isAuthenticated: false,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("check login: ", action);
      return {
        ...state,
        account: {
          access_token: action?.payload?.access_token,
          refresh_token: action?.payload?.refresh_token,
          username: action?.payload?.username,
          image: action?.payload?.image,
          role: action?.payload?.role,
        },
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
export default userReducer;
