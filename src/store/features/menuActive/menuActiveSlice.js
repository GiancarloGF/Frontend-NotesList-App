//SHOW ALL REDUCER
const menu__active_initial = false;
const menuActiveReducer = (state = menu__active_initial, action) => {
    switch (action.type) {
        case 'MENU_ACTIVE/TOGGLE': {
            return !state;
        }
        default: {
            return state;
        }
    }
}


export function activeMenuAction() {
    return {
        type:"MENU_ACTIVE/TOGGLE",
    }
}

export default menuActiveReducer;