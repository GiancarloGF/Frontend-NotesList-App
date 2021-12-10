const initialNotes=[];

//NOTES REDUCER
const notesReducer = (state = initialNotes, action) => {
    switch (action.type) {
        case 'NOTES/GET_ALL_NOTES': {
            return state;
        }
        case 'NOTES/ADD_NOTE': {
            return {...state, notes:[...state.notes,action.payload]};
        }

        case 'NOTES/DELETE_NOTE': {
            return{ ...state,notes:[...state.notes].filter(note => note.id !== action.payload)};
        }

        default: {
            return state;
        }
    }
}


export function getAllNotesAction() {
    return {
        type:"NOTES/GET_ALL_NOTES",
    }
}

export function addNoteAction(payload) {
    return {
        type:"NOTES/ADD_NOTE",
        payload
    }
}

export function deleteNoteAction(payload) {
    return {
        type:"NOTES/DELETE_NOTE",
        payload
    }
}

export default notesReducer;