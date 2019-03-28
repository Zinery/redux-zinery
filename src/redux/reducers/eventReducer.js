import {
    UPVOTE,
    DOWNVOTE,
    GET_ALL_EXTERNAL_EVENTS
} from '../constants/event';
import uuid from 'uuid/v4';


let initialState = { 
    eventApiArray: []
    
};

export default (state = initialState, action) => {
    let updated = Object.assign({}, state);

    console.log(action.payload)
    switch(action.type){

        case UPVOTE:
            updated.eventVotes.forEach(event => {
                if (event.id === action.id) {
                    event.voteCount += 1;
                }else{
                    let eventObj = {
                        id: uuid(),
                        eventID: action.payload.id,
                        voteCount: 1
                    }
                    return eventObj
                }
            });

            return updated;

        case DOWNVOTE:
            updated.events.forEach(event => {
                if (event.id === action.id) {
                event.voteCount -= 1;
                }
            });

            return updated;
        
        case GET_ALL_EXTERNAL_EVENTS:

            updated.eventApiArray= 
                action.payload.map(event => {
                    let eventObj = {
                        id: event.id,
                        title: event.title,
                        type: event.type,
                        url: event.url,
                        image: event.performers[0].image,
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