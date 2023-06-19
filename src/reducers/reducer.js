const initialState = {
    nameSong: 'Chilly',
    night: false,
    rain: false,
    inSide: false,
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
        case 'CHANGE_INSIDE': {
            let isInSideCafe;
            if (action.payload === 'in') {
                isInSideCafe = true;
            } else {
                isInSideCafe = false;
            }

            if (action.payload === 'inWindow') {
                isInSideCafe = 'inWindow';
            }

            return {
                ...state,
                inSide: isInSideCafe,
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
