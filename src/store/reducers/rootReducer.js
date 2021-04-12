import authReducer from './authReducer'
import messageReducer from './messageReducer'
import plantReducer from './plantReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    message: messageReducer,
    plants: plantReducer,
    firestore :firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;