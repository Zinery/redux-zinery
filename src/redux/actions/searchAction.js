import {
    GET_EVENTS_BY_LOCATION,
    GET_EVENTS_BY_CATEGORY,
    GET_EVENTS_BY_DATE
} from '../constants/search';
import Axios from './Axios/Axios';

export const getEventsByLocation = (data) => dispatch => {

    Axios.get('/search/geteventsbylocation', data)
    .then(result => {
        dispatch({
            type: GET_EVENTS_BY_LOCATION,
            payload: result.data
        })
    })
}

export const getEventsByCategory = (data) => dispatch => {

    Axios.get('/search/geteventsbycategory', data)
    .then(result => {
        dispatch({
            type: GET_EVENTS_BY_CATEGORY,
            payload: result.data
        })
    })
}

export const getEventsByDate = (data) => dispatch => {

    Axios.get('/search/geteventsbydate', data)
    .then(result => {
        dispatch({
            type: GET_EVENTS_BY_DATE,
            payload: result.data
        })
    })
}