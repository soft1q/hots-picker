import { PICK_HERO } from '../actions/types.js'

const initialState = {
    blue_picks: [],
    red_picks: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case PICK_HERO:
            switch(action.payload.team) {
                case 'blue':
                    if (state.hasOwnProperty('blue_picks') && state.blue_picks.length < 5) {
                        return {
                            ...state,
                            blue_picks: [...state.blue_picks, action.payload.hero_id]
                        };
                    } else if (!state.hasOwnProperty('blue_picks')) {
                        return {
                            ...state,
                            blue_picks: [action.payload.hero_id]
                        }
                    } else {
                        return state;
                    }
                case 'red':
                    if (state.hasOwnProperty('red_picks') && state.red_picks.length < 5) {
                        return {
                            ...state,
                            red_picks: [...state.red_picks, action.payload.hero_id]
                        };
                    } else if (!state.hasOwnProperty('red_picks')) {
                        return {
                            ...state,
                            red_picks: [action.payload.hero_id]
                        }
                    } else {
                        return state;
                    }
                default:
                    return state;
            }
        default:
            return state;
    }
}