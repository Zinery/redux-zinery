import {
    GET_ALL_INTERNAL_EVENTS,
    ADD_EVENT,
    DELETE_EVENT,
    UPDATE_EVENT,
    GET_ALL_EXTERNAL_EVENTS
} from '../constants/event';


let initialState = {
    eventArray: [], 
    eventApiArray: [],
};

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    console.log(action.payload)
    switch(action.type){
        case GET_ALL_INTERNAL_EVENTS:
            updated.events = action.payload
            return updated
        
        case ADD_EVENT:
            updated.events.push(action.payload)
            return updated

        case UPDATE_EVENT:
            
            return updated

        case DELETE_EVENT:

            return updated
        
        case GET_ALL_EXTERNAL_EVENTS:

            updated.eventApiArray= 
                action.payload.map(event => {
                    let eventObj = {
                        id: event.id,
                        title: event.title,
                        type: event.type,
                        url: event.url,
                        image: event.performers,
                        location: event.venue.display_location,
                        date: event.datetime_utc,
                        price: event.stats.average_price
                    }
                    return eventObj
                })
            
            console.log('reducer update: ', updated)
            return updated


        default:
            return state
    }
}