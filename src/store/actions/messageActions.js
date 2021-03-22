export const createMessage = (message) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('Messages').add({
            ...message,            
            creator: 'Leo',
            title: 'Hi',
            message:'test123'        
        }).then(() => {
            dispatch({ type: "CREATE_MESSAGE", message });
        }).catch((error) => {
            dispatch({ type : "CREATE_MESSAGE_ERROR", error})
        })
        
    }

}