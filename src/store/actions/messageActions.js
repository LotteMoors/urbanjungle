export const createMessage = (message) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('Message').add({                     
            creator: 'Leo',
            title: 'Hi',
            message:'test123'        
        }).then(() => {
            dispatch({ type: "CREATE_MESSAGE" });
        }).catch((err) => {
            dispatch({ type : "CREATE_MESSAGE_ERROR", err})
        })
        
    }

}