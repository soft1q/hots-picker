import { PICK_HERO } from './types';

// PICK HERO
export const pickHero = (id, team) => dispatch => {
    dispatch({
        type: PICK_HERO,
        payload: {
            team: team,
            hero_id: id
        }
    })
}