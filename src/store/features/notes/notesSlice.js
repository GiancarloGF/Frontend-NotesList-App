import { STATES } from 'mongoose';
import noteService from '../../../services/notesService';
// import { createAsyncThunk } from '@reduxjs/toolkit'
// import {useSelector, useDispatch} from 'react-redux';
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
            return { ...state, notes: action.payload, loading: false, error: "" };
        }
        case 'NOTES/FETCH_CREATE_REQUEST': {
            return { ...state, loading: true };
        }
        case 'NOTES/FETCH_CREATE_ERROR': {
            return { ...state, loading: false, error: action.payload };
        }
        case 'NOTES/FETCH_CREATE_SUCCESS': {
            return { ...state, notes: [...state.notes, action.payload], loading: false, error: "" };
        }
        case 'NOTES/TOGGLE_SHOW_OPTIONS': {
            return { ...state, notes: action.payload, loading: false, error: "" };
        }
        case 'NOTES/UPDATE_NOTE': {
            return {
                ...state, notes: [...state.notes].map((note) => {
                    return note.id !== action.payload.id ? note : action.payload
                }),
                loading: false,
                error: ""
            };
        }
        case 'NOTES/DELETE_NOTE': {
            return {
                ...state, notes: [...state.notes].filter(note => {
                    return note.id !== action.payload
                }), loading: false, error: ""
            };
        }
        default: {
            return state;
        }
    }
}



export const toggleOptionsAction = (id, notes) => {
    const notesUpdated = notes.map(note => {
        if (note.id === id) {
            return { ...note, showingOptions: !note.showingOptions }
        } else {
            return { ...note, showingOptions: false }
        }
    });
    return {
        type: 'NOTES/TOGGLE_SHOW_OPTIONS',
        payload: notesUpdated
    }
}

export const getNotesAction = () => {
    return async (dispatch, getState) => {
        try {
            const response = await noteService.getAll();
            const payload = response.map(note => {
                return {
                    ...note,
                    editing: false,
                    showingOptions: false
                }
            });

            dispatch({ type: 'NOTES/FETCH_SUCCESS', payload: payload });
        } catch (error) {
            console.log(error);
        }
    }
}

export const createNoteAction = (newNoteObj) => {
    return async (dispatch, getState) => {
        try {
            const payload = await noteService.create(newNoteObj);
            dispatch({ type: 'NOTES/FETCH_CREATE_SUCCESS', payload: payload });
            dispatch({ type: 'NOTIFICATION/SUCCESS_MESSAGE', payload: 'Nota creada exitosamente' });
            setTimeout(() => {
                dispatch({ type: 'NOTIFICATION/RESET' });
            }, 2000);
        } catch (error) {
            dispatch({ type: 'NOTIFICATION/ERROR_MESSAGE', payload: 'No se pudo crear la nota' });
            setTimeout(() => {
                dispatch({ type: 'NOTIFICATION/RESET' });
            }, 2000);
            console.log(error);
        }
    }
}

export const updateNoteAction = (id, noteUpdatedObj) => {
    return async (dispatch, getState) => {
        try {
            const response = await noteService.update(id, noteUpdatedObj);
            dispatch({ type: 'NOTES/UPDATE_NOTE', payload: response });
            dispatch({ type: 'NOTIFICATION/SUCCESS_MESSAGE', payload: 'Nota editada exitosamente' });
            setTimeout(() => {
                dispatch({ type: 'NOTIFICATION/RESET' });
            }, 2500);
        } catch (error) {
            dispatch({ type: 'NOTIFICATION/ERROR_MESSAGE', payload: 'No se pudo editar la nota' });
            setTimeout(() => {
                dispatch({ type: 'NOTIFICATION/RESET' });
            }, 2500);
        }

    }
}

export const deleteNoteAction = (id) => {
    return async (dispatch, getState) => {
        try {
            await noteService.deleteNote(id);
            dispatch({ type: 'NOTES/DELETE_NOTE', payload: id });
            dispatch({ type: 'NOTIFICATION/SUCCESS_MESSAGE', payload: 'Nota eliminada exitosamente' });
            setTimeout(() => {
                dispatch({ type: 'NOTIFICATION/RESET' });
            }, 2500);
        } catch (error) {
            dispatch({ type: 'NOTIFICATION/ERROR_MESSAGE', payload: 'No se pudo eliminar la nota' });
            setTimeout(() => {
                dispatch({ type: 'NOTIFICATION/RESET' });
            }, 2500);
        }

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

// export const deleteNoteAction = (payload) => {
//     return {
//         type: "NOTES/DELETE_NOTE",
//         payload
//     }
// }

export default notesReducer;