import { GET_HEROES } from '../actions/types.js'

const initialState = {
    heroes: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_HEROES:
            return {
                ...state,
                heroes: action.payload
            };
        default:
            return state;
    }
}