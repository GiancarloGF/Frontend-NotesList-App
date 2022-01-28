//USER REDUCER
import weatherService from "../../../services/weatherService";

const weather = {};
const weatherReducer = (state = weather, action) => {
    switch (action.type) {
        case 'WEATHER/SET': {
            return state = action.payload;
        }

        default: {
            return state;
        }
    }
}

export const getByLocationAction = (lat,lon) => {
    return async (dispatch, getState) => {
        try {
            const data = await weatherService.getByLocation(lat,lon);
            dispatch({ type: "WEATHER/SET", payload: data });
        } catch (exception) {
            console.log(exception);
        }
    };
}

export const getByQAction = (q) => {
    return async (dispatch, getState) => {
        try {
            const data = await weatherService.getByQ(q);
            dispatch({ type: "WEATHER/SET", payload: data });
        } catch (exception) {
            console.log(exception);
        }
    };
}
export default weatherReducer;