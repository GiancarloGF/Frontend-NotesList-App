//USER REDUCER
const initialUser = {};
const userReducer = (state = initialUser, action) => {
    switch (action.type) {
        case 'USER/SET_USER': {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

export const userSelector = state => state.user;

export default userReducer;