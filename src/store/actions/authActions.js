export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const users = firestore.collection("users");
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((resp) => {
        return users.doc(resp.user.uid).set({
          username: user.username,
          firstName: "First name",
          lastName: "Last name",
          location: "Location",
          img:
            "https://media.istockphoto.com/vectors/abstract-dotted-vector-background-halftone-effect-spiral-dotted-or-vector-id1140647479?k=6&m=1140647479&s=170667a&w=0&h=xUlmFv8iEOoFwYRQAF-ADGsX-qIZU_KKbVJ5X8otJYE=",
        });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const updateUser = (data) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const authID = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
    .collection('users')
    .doc(`${authID}`)
    .update({
      firstName: data.firstName,
      lastName: data.lastName,
      location: data.location,
      img: data.img      
    },{merge: true})
      .then(() => {
        dispatch(
          { type: "USER_INFO_UPDATED" }
        );
      })
      .catch((err) => {
        dispatch({ type: "ERROR_USER__UPDATED" }, err);
      });
  };
};
