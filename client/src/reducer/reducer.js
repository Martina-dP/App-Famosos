import {GET_FAMOSOS, POST_FORM , POST_FAMOSOS} from "../actions/action";

const initialState = {
famosos: [],
allFamosos: [],
resultados: [],
votaciones: []
};

function rootReducer (state = initialState, { type, payload }) {
switch(type) {
    case GET_FAMOSOS :
        return {
            ...state,
            famosos : payload,
            allFamosos : payload
        }
    case POST_FORM :
        return {
            ...state,
            resultados : payload
        }
    case POST_FAMOSOS :
        return {
            ...state,
            votaciones : payload
        }
    default: return state;
}
}

export default rootReducer;