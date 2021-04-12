

export const addHome = (item) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const authID = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore            
      .collection('HomePlants')
      .doc(`${authID}+${item.id}`)
      .set({
        name: item.common_name,
        img: item.image_url,
        self: item.links.self,
        id:  item.id,
        authID:authID
        
      }, { merge: true })
      .then(() => {
        dispatch({ type: "ADD_TO_HOME" });
      })
      .catch((err) => {
        dispatch({ type: "ADD_HOME_ERROR" }, err);
      });
  };
};


export const deleteHome = (item) => {
  return (dispatch, getState, {getFirebase, getFirestore }) => {
    const authID = getState().firebase.auth.uid;
 const firestore = getFirestore()
 firestore.collection(`HomePlants`).doc(`${authID}+${item.id}`).delete().then(() => {
   dispatch({ type: "DELETE_HOME" });
 })
 .catch((err) => {
   dispatch({ type: "DELETE_HOME_ERROR" }, err);
 });
} 
 }




export const addLiked = (item) => {  
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const authID = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
    .collection('LikedPlants')
      .doc(`${authID}+${item.id}`)      
      .set({
        name: item.common_name,
        img: item.image_url,
        self: item.links.self,
        id:  item.id,
        authID:authID
    }, { merge: true })    
      .then(() => {
        dispatch({ type: "ADD_TO_LIKED" }, { name: item.common_name,
          img: item.image_url,
          self: item.links.self,
          id: authID});
      })
      .catch((err) => {
        dispatch({ type: "ADD_LIKED_ERROR" }, err);
      });
  };
};

export const deleteLiked = (item) => {
  return (dispatch, getState, { getFirestore }) => {
    const authID = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore.collection(`LikedPlants`).doc(`${authID}+${item.id}`).delete().then(() => {
      dispatch({ type: "DELETE_LIKED" });
    })
    .catch((err) => {
      dispatch({ type: "UNLIKE_ERROR" }, err);
    });
   } 
  }
 

  
