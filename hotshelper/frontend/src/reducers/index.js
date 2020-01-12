import { combineReducers } from 'redux';
import heroes from './heroes';
import pick from './pick';

export default combineReducers({
    heroes,
    pick
});