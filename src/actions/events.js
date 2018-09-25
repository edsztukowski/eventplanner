

export const addEvent = (event) => ({
    type: 'ADD_EVENT',
    event
});

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