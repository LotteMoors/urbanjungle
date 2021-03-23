const initState = {
  authError: null,
  isLoggedIn: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Incorrect username/password",
        isLoggedIn: false,
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        authError: null,
        isLoggedIn: true,
      };
    case "SIGNOUT_SUCCESS":
      console.log("signed out");
      return {
        ...state,
        isLoggedIn: false,
      };
    case "SIGNUP_SUCCESS":
      console.log("signed up");
      return {
        ...state,
        authError: null,
        isLoggedIn: true,
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
