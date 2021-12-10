//SUCCESS OR ERROR MESSAGE REDUCER
const initialNotification = {
    message: null,
    status: null
};
const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'NOTIFICATION/LOGIN_SUCCESS': {
            return state = { ...state, message: 'Login Exitoso', status: 'success' }
        }
        case 'NOTIFICATION/LOGIN_ERROR': {
            return state = { ...state, message: 'Email o Contraseña erroneas', status: 'error' }
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