import noteService from '../../../services/notesService';
// import { createAsyncThunk } from '@reduxjs/toolkit'


const initialNotes = {
    notes: [],
    loading: false,
    error: false
};

//NOTES REDUCER
const notesReducer = (state = initialNotes, action) => {
    switch (action.type) {
        case 'NOTES/GET_ALL_NOTES': {
            return { ...state, notes: action.payload };
        }
        case 'NOTES/ADD_NOTE': {
            return { ...state, notes: [...state.notes, action.payload] };
        }

        case 'NOTES/DELETE_NOTE': {
            return { ...state, notes: [...state.notes].filter(note => note.id !== action.payload) };
        }
        case 'NOTES/FETCH_REQUEST': {
            return { ...state, loading: true };
        }
        case 'NOTES/FETCH_ERROR': {
            return { ...state, loading: false, error: true };
        }
        case 'NOTES/FETCH_SUCCESS': {
            return { ...state, loading: false, error: false };
        }
        default: {
            return state;
        }
    }
}

export const getAllAction = () => {
    return async (dispatch, getState) => {
        const payload = await noteService.getAll();
        dispatch({ type: 'NOTES/GET_ALL_NOTES', payload: payload });
    }
}

// export const fetchUserById = createAsyncThunk(
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