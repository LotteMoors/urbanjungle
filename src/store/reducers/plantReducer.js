const initState = {
  id: {
    plantID: {
      isLiked: false,
      isHome: false,
    },
  },
};

const plantReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_HOME":
      console.log("Plant added to home success");
      return {
        id: {
          plantID: {
            isLiked: false,
            isHome: true,
          },
        },
      };
    case "ADD_HOME_ERROR":
      console.log("Error Add To Home ");
      return state;
    case "ADD_TO_LIKED":
      console.log("Plant liked successful");
      return {
        id: {
          plantID: {
            isLiked: true,
            isHome: false,
          },
        },
      };
    case "ADD_LIKED_ERROR":
      console.log("Error Liked Plant");
      return state;
    case "DELETE_HOME":
      console.log("HomePlant deleted");
      return {
        id: {
          plantID: {
            isLiked: false,
            isHome: false,
          },
        },
      };
    case "DELETE_HOME_ERROR":
      console.log("Error Deleting HomePlant");
      return state;
    case "DELETE_LIKED":
      console.log("Plant unlike successful");
      return {
        id: {
          plantID: {
            isLiked: false,
            isHome: false,
          },
        },
      };
    case "UNLIKE_ERROR":
      console.log("Unlike error");
      return state;   
    default:
      return state;
  }
};

export default plantReducer;
