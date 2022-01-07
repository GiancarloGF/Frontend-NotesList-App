import notesService from "../../../services/notesService";
import { useNavigate } from "react-router-dom";
import loginService from "../../../services/loginService"
import registerService from "../../../services/registerService"

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


export const signinAction = (email, password) => {
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

export const signupAction = (credentials) => {

    return async (dispatch, getState) => {
        try {
            await registerService.register(credentials);
            dispatch({ type: "NOTIFICATION/SUCCESS_MESSAGE", payload: "Registro Exitoso" });
            setTimeout(() => {
                dispatch({ type: "NOTIFICATION/RESET" });
            }, 2500);
        } catch (exception) {
            dispatch({ type: 'NOTIFICATION/ERROR_MESSAGE', payload: 'Email o Nombre de usuario ya usados' });
            setTimeout(() => dispatch({ type: "NOTIFICATION/RESET" }), 3000);
        }
    };
}

export default userReducer;