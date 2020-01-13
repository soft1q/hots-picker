import { GET_HISTORY, DELETE_RECORD, ADD_RECORD } from '../actions/types.js';

const initialState = {
    records: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_HISTORY:
            return {
                ...state,
                records: action.payload
            };
        case DELETE_RECORD:
            return {
                ...state,
                records: state.records.filter(record => record.id !== action.payload)
            }
        case ADD_RECORD:
            return {
                ...state,
                records: [...state.records, action.payload]
            }
        default:
            return state
    }
}