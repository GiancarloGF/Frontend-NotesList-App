//SHOW ALL REDUCER
const initialShowAll = true;
const showAllReducer = (state = initialShowAll, action) => {
    switch (action.type) {
        case 'SHOW_ALL/TOGGLE': {
            return !state;
        }
        default: {
            return state;
        }
    }
}


export function showToggleAction() {
    return {
        type:"SHOW_ALL/TOGGLE",
    }
}

export default showAllReducer;