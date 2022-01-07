import { Action } from "history";

//SUCCESS OR ERROR MESSAGE REDUCER
const initialNotification = {
    message: null,
    status: null
};
const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'NOTIFICATION/SUCCESS_MESSAGE': {
            return state = { ...state, message: action.payload, status: 'success' }
        }
        case 'NOTIFICATION/ERROR_MESSAGE': {
            return state = { ...state, message: action.payload, status: 'error' }
        }
        case 'NOTIFICATION/RESET': {
            return state = {
                message: null,
                status: null
            };
        }
        default: {
            return state;
        }
    }
}

export const notificationSelector = (state) => state.notification;


export default notificationReducer;