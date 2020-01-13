import axios from 'axios';
import { GET_HISTORY, DELETE_RECORD, ADD_RECORD } from './types'

// GET HISTORY
export const getHistory = () => (dispatch, getState) => {
    const token = getState().auth.token;
    const config = {
        headers : {
            'Content-Type': 'application/json'
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    axios.get('/api/history', config).then(res => {
        dispatch({
            type: GET_HISTORY,
            payload: res.data
        })
    }).catch(err => console.log(err))
}

// DELETE RECORD
export const deleteRecord = (id) => (dispatch, getState) => {
    const token = getState().auth.token;
    const config = {
        headers : {
            'Content-Type': 'application/json'
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    axios.delete(`/api/history/${id}/`, config).then(res => {
        dispatch({
            type: DELETE_RECORD,
            payload: id
        })
    }).catch(err => console.log(err))
}

// ADD RECORD
export const addRecord = (record) => (dispatch, getState) => {
    const token = getState().auth.token;
    const config = {
        headers : {
            'Content-Type': 'application/json'
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    axios.post('/api/history/', record, config).then(res => {
        dispatch({
            type: ADD_RECORD,
            payload: res.data
        })
    }).catch(err => console.log(err))
}