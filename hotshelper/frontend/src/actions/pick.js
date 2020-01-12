import { PICK_HERO, REMOVE_HERO } from './types';

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

// REMOVE HERO FROM TEAM
export const removeHero = (id, team) => dispatch => {
    dispatch({
        type: REMOVE_HERO,
        payload: {
            team: team,
            hero_id: id
        }
    })
}