import axios from 'axios';
import { GET_HEROES } from './types'

// GET HEROES
export const getHeroes = () => dispatch => {
    axios
        .get('/api/heroes/')
        .then(res => {
            dispatch({
                type: GET_HEROES,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}