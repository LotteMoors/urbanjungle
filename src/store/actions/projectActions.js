export const createUser = (user) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('Users').add({
            ...user,            
            username: 'Leo69',
            email: 'leo@hotmail.com',
            password:'test123'        
        }).then(() => {
            dispatch({ type: "CREATE_USER", user });
        }).catch((error) => {
            dispatch({ type : "CREATE_USER_ERROR", error})
        })
        
    }

}