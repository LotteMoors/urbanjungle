const initState = {
  messages: [
    { creator: "1", title: "hi", message: "now" },
    { creator: "2", title: "hello", message: "then" },
    { creator: "3", title: "there", message: "yesterday" },
  ],
};


const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_MESSAGE_SUCCESS':
      console.log('create message success');
      return state;
    case 'CREATE_MESSAGE_ERROR':
      console.log('create message error');
      return state;
    default:
      return state;
  }
};

export default messageReducer;
