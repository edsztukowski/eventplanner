
 
const eventDefaultState = {
    allEvents: [],
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

        case 'REMOVE_EVENT':
            return {
                ...state,
                allEvents: state.allEvents.filter((event) => event._id !== action.eventId)
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
        case 'SET_EVENTS': 
            return {
                allEvents: [
                    ...action.events
                ]
            }
        default: 
            return state;
    };
};