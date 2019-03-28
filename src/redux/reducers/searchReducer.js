import {
    GET_EVENTS_BY_LOCATION,
    GET_EVENTS_BY_CATEGORY,
    GET_EVENTS_BY_DATE
} from '../constants/search';

let initialState = {
    eventApiArray: []
};

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    switch(action.type){
        case GET_EVENTS_BY_LOCATION:
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
            return updated
        
        case GET_EVENTS_BY_CATEGORY:
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
            return updated

        case GET_EVENTS_BY_DATE:
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
            return updated

        default:
            return state
    }
}
