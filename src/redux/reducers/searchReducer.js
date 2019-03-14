import {
    GET_EVENTS_BY_LOCATION,
    GET_EVENTS_BY_CATEGORY,
    GET_EVENTS_BY_DATE
} from '../constants/search';

let initialState = {
    eventArray: []
};

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch(action.type){
        case GET_EVENTS_BY_LOCATION:
            updated.events = action.payload
            return updated
        
        case GET_EVENTS_BY_CATEGORY:
            updated.events = action.payload
            return updated

        case GET_EVENTS_BY_DATE:
            updated.events = action.payload
            return updated

        default:
            return state
    }
}
