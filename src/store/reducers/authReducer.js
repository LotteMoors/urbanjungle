const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Incorrect username/password",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        authError: null,
      };
    default:
      return state;
  }
};

export default authReducer;
