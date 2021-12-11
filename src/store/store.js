import { createStore ,combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import notificationReducer from './features/notification/notificationSlice';
import notesReducer from './features/notes/notesSlice';
import showAllReducer from './features/showAll/showAllSlice';
import userReducer from './features/user/userSlice';
import menuActiveReducer from './features/menuActive/menuActiveSlice';

const reducers= {
    notes: notesReducer,
    showAll: showAllReducer,
    notification: notificationReducer,
    user: userReducer,
    isMenuActive: menuActiveReducer
}


//STORE
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, composeWithDevTools());

export default store;