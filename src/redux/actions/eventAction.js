import {
    UPVOTE,
    DOWNVOTE,
    GET_ALL_EXTERNAL_EVENTS
} from '../constants/event';
import Axios from './Axios/Axios';
import jwt_decode from 'jwt-decode';
import axios from 'axios'


export const getAllExternalEvents = () => dispatch => {
    
    axios.get(`https://api.seatgeek.com/2/events?client_id=MTU3MTM3NDV8MTU1MjMyMjUyNC4yOQ&per_page=50`)
          .then(result => {
              console.log(result)
              dispatch({
                  type: GET_ALL_EXTERNAL_EVENTS,
                  payload: result.data.events
              })
          })
          .catch(err => {
              console.log('action err: ', err)
          })


}

export const upvote = id => dispatch => {
    dispatch({
      type: UPVOTE,
      id
    });
  };
  
  export const downvote = id => dispatch => {
    dispatch({
      type: DOWNVOTE,
      id
    });
  };