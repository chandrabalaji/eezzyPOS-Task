export const UserLogin = "Userlogin";


export const LoginAction = (payload) => {
  // console.log("action triger");

  return {
    type: UserLogin,
    payload: payload,
  };
};


