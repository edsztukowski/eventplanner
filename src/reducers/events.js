
import { guid } from 'react-agenda';

var now = new Date();
 
const eventDefaultState = {

    allEvents: [
        {
            _id            :guid(),
            name          : 'Meeting , dev staff!',
            startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0),
            endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
            classes       : 'color-1'
       },
       {
            _id            :guid(),
            name          : 'Working lunch , Holly',
            startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 11, 0),
            endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 13, 0),
            classes       : 'color-2 color-3'
       },
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