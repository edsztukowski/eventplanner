import database from '../config/config';

export const addEvent = (event) => ({
    type: 'ADD_EVENT',
    event
});

export const startAddEvent = (eventData = {}) => {
    return (dispatch) => {
        const {
            _id = '',
            name = '',
            startDateTime = '',
            endDateTime = '',
            classes = '',
            description = '',
            duration = ''
        } = eventData;
        const event = { _id, name, startDateTime, endDateTime, classes, description, duration };

        return database.ref('events/allevents').push(event).then(() => {
            dispatch(addEvent(event));
            
        });
    };
}

export const addTempEvent = (tempEvent) => ({
    type: 'ADD_TEMP_EVENT',
    tempEvent
})

export const editEvent = (eventId, updates) => ({
    type: 'EDIT_EVENT',
    eventId,
    updates
});

export const removeEvent = (eventId) => ({
    type: 'REMOVE_EVENT',
    eventId
})

export const setEvents = (events) => ({
    type: 'SET_EVENTS',
    events
});

// export const startSetEvents = () => {
//     return (dispatch, getState) => {
//         return database.ref(`events/allevents`).once('value')
//         .then((snapshot) => {
//             const events = [];

//             snapshot.forEach((childSnapshot) => {
//                 events.push({
//                     ...childSnapshot.val()
//                 });
//             });
//             dispatch(setEvents(events));
//         });
//     }
// }