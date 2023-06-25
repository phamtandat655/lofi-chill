const initialState = {
    nameSong: 'Chilly',
    night: false,
    rain: false,
    bg: 'outCf',
    muteAll: false,
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SONG': {
            return {
                ...state,
                nameSong: action.payload,
            };
        }
        case 'CHANGE_NIGHT': {
            return {
                ...state,
                night: !state.night,
            };
        }
        case 'CHANGE_RAIN': {
            return {
                ...state,
                rain: !state.rain,
            };
        }
        case 'CHANGE_BG': {
            return {
                ...state,
                bg: action.payload,
            };
        }
        case 'CHANGE_MUTEALL': {
            return {
                ...state,
                muteAll: !state.muteAll,
            };
        }
        default:
            return state;
    }
};
export default rootReducer;
