import Axios from './Axios/Axios';
import setAuthJWT from './Axios/setAuthJWT';
import jwt_decode from 'jwt-decode';

import {SIGN_UP, LOGIN, LOGOUT} from '../constants/auth';

export const signUp = (data) => dispatch => {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    }; 

    Axios.post('/users/signup', data, axiosConfig)
    .then(result => {
        const {token} = result.data;
        localStorage.setItem('jwtToken', token);
        const decoded = jwt_decode(token);

        setAuthJWT(token);

        dispatch({
            type: SIGN_UP,
            payload: decoded
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const login = (data) => dispatch => {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    }; 

    Axios.post('/users/login', data, axiosConfig)
    .then(result => {
        const {token} = result.data;
        localStorage.setItem('jwtToken', token);
        const decoded = jwt_decode(token);

        setAuthJWT(token);

        dispatch({
            type: LOGIN,
            payload: decoded
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const logout = () => dispatch => {

    setAuthJWT(null)
    localStorage.removeItem('jwtToken');
    dispatch({
        type: LOGOUT
    })
}