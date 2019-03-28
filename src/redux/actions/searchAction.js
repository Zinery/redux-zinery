import {
    GET_EVENTS_BY_LOCATION,
    GET_EVENTS_BY_CATEGORY,
    GET_EVENTS_BY_DATE
} from '../constants/search';
import axios from 'axios';

export const getEventsByLocation = (zip) => dispatch => {

    axios.get(`https://api.seatgeek.com/2/events?client_id=MTU3MTM3NDV8MTU1MjMyMjUyNC4yOQ&postal_code=${zip}`)
    .then(result => {
        dispatch({
            type: GET_EVENTS_BY_LOCATION,
            payload: result.data
        })
    })
}

export const getEventsByCategory = (cat) => dispatch => {

    axios.get(`https://api.seatgeek.com/2/events?client_id=MTU3MTM3NDV8MTU1MjMyMjUyNC4yOQ&type=${cat}`)
    .then(result => {
        dispatch({
            type: GET_EVENTS_BY_CATEGORY,
            payload: result.data
        })
    })
}

export const getEventsByDate = (date) => dispatch => {

    axios.get(`https://api.seatgeek.com/2/events?client_id=MTU3MTM3NDV8MTU1MjMyMjUyNC4yOQ&datetime_local=?${date}`)
    .then(result => {
        dispatch({
            type: GET_EVENTS_BY_DATE,
            payload: result.data
        })
    })
}