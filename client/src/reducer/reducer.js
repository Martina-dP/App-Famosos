import {GET_FAMOSOS, } from "../actions/action";

const initialState = {
famosos: [],
allFamosos: [],
};

function rootReducer (state = initialState, { type, payload }) {
switch(type) {
    case GET_FAMOSOS :
        return {
            ...state,
            famosos : payload,
            allFamosos : payload
        }
    default: return state;
}
}

export default rootReducer;