import { UserLogin, Pendingorder } from "./Actions";

const initialState = {
  Userinfo: [],
};

export default (state = initialState, { type, payload }) => {
  console.log("login reducer", payload);
  switch (type) {
    case UserLogin:
      return { ...state, Userinfo: payload };

    default:
      return state;
  }
};

export const user = (state) => state.Userinfo;
