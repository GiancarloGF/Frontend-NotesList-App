//USER REDUCER
const colorThemeInitial = 'light';
const colorThemeReducer = (state = colorThemeInitial, action) => {
    switch (action.type) {
        case 'COLOR_THEME/TOGGLE': {
            return state=== 'light' ? 'dark' : 'light';
        }

        default: {
            return state;
        }
    }
}

export const colorThemeSelector = state => state.colorTheme;

export default colorThemeReducer;