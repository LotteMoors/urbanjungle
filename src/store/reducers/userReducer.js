const initState = {
  users: [
    { id: "1", username: "hi", email: "now" },
    { id: "2", username: "hello", email: "then" },
    { id: "3", username: "there", email: "yesterday" },
  ],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      console.log("created", action.users);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("error occurred", action.error);
      return state;
    default:
      return state
  }
};

export default userReducer;
