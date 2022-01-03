import noteService from '../../../services/notesService';
// import { createAsyncThunk } from '@reduxjs/toolkit'


const initialNotes = {
    notes: [],
    loading: false,
    error: ""
};

//NOTES REDUCER
const notesReducer = (state = initialNotes, action) => {
    switch (action.type) {
        case 'NOTES/FETCH_REQUEST': {
            return { ...state, loading: true };
        }
        case 'NOTES/FETCH_ERROR': {
            return { ...state, loading: false, error: action.payload };
        }
        case 'NOTES/FETCH_SUCCESS': {
            return { ...state, notes: action.payload , loading: false, error: "" };
        }
        default: {
            return state;
        }
    }
}

export const getAllAction = () => {
    return async (dispatch, getState) => {
        const payload = await noteService.getAll();
        dispatch({ type: 'NOTES/FETCH_SUCCESS', payload: payload });
    }
}

export const createAction = () => {
    return async (dispatch, getState) => {
        const payload = await noteService.create();
        dispatch({ type: 'NOTES/FETCH_SUCCESS', payload: payload });
    }
}

export const updateAction = () => {
    return async (dispatch, getState) => {
        const payload = await noteService.update();
        dispatch({ type: 'NOTES/FETCH_SUCCESS', payload: payload });
    }
}

// export const getAllAction = createAsyncThunk(
//     'NOTES/GET_ALL_NOTES', // action type
//     async (arg, thunkAPI) => {// payload creator
//         const response = await noteService.getAll();
//         return response.json();
//     }
// )


export const addNoteAction = (payload) => {
    return {
        type: "NOTES/ADD_NOTE",
        payload
    }
}

export const deleteNoteAction = (payload) => {
    return {
        type: "NOTES/DELETE_NOTE",
        payload
    }
}

export default notesReducer;