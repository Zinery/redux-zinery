import {SIGN_UP, LOGOUT, LOGIN} from '../constants/auth';

let initialState = {
    user: null
};

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch(action.type){
        case SIGN_UP:
            updated.user = action.payload.data.email
            return updated
        
        case LOGIN:
            updated.user = action.payload.data.email
            return updated

        case LOGOUT:
            updated.user = null
            return updated

        default:
            return state
    }
}