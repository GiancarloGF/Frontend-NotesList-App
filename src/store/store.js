import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import notificationReducer from './features/notification/notificationSlice';
import notesReducer from './features/notes/notesSlice';
import showAllReducer from './features/showAll/showAllSlice';
import userReducer from './features/user/userSlice';
import menuActiveReducer from './features/menuActive/menuActiveSlice';
import colorThemeReducer from './features/colorTheme/colorThemeSlice';


const reducers = {
    notes: notesReducer, 
    showAll: showAllReducer,
    notification: notificationReducer,
    user: userReducer,
    isMenuActive: menuActiveReducer,
    colorTheme: colorThemeReducer
}


//STORE
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;