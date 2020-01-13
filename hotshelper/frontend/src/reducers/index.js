import { combineReducers } from 'redux';
import heroes from './heroes';
import pick from './pick';
import auth from './auth';
import history from './history'

export default combineReducers({
    heroes,
    pick,
    auth,
    history
});