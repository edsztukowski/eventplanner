
import { guid } from 'react-agenda';

var now = new Date();
 
const eventDefaultState = {
    allEvents: [
    ],
    tempEvent: {}
}

export default (state = eventDefaultState, action = {}) => {
    switch(action.type) {
        case 'ADD_EVENT':
            return {
                ...state,
                allEvents: [
                    ...state.allEvents,
                    ...[{...action.event}]
                ] 
            }
        case 'ADD_TEMP_EVENT':
            return {
                ...state,
                tempEvent: action.tempEvent
            }

        case 'EDIT_EVENT':
            return {
                ...state,
                allEvents: state.allEvents.map((event) => {
                    if (event._id === action.eventId) {
                        return {            
                            ...event,
                            ...action.updates        
                        }
                    } else {
                        return {...event};
                    }
                })
            }
        default: 
            return state;
    };
};