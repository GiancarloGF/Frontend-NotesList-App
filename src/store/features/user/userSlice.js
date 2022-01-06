import notesService from "../../../services/notesService";
import { useNavigate } from "react-router-dom";
import loginService from "../../../services/loginService"

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


export const setUserAction = (email, password) => {
    console.log("email", email);
    console.log("password", password);
    return async (dispatch, getState) => {
        try {
            const user = await loginService.login({ email, password });
            window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
            notesService.setToken(user.token);
            dispatch({ type: "USER/SET_USER", payload: user });
            dispatch({ type: "NOTIFICATION/SUCCESS_MESSAGE", payload: "Login Exitoso" });
            setTimeout(() => {
                dispatch({ type: "NOTIFICATION/RESET" });
            }, 2500);
        } catch (exception) {
            dispatch({ type: 'NOTIFICATION/ERROR_MESSAGE', payload: 'Email o Contraseña erroneas' });
            setTimeout(() => dispatch({ type: "NOTIFICATION/RESET" }), 3000);
        }
    };
}

export default userReducer;