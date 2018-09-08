export const simpleAction = () => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 'result_of_simple_action'
    });
};

export const AddEvent = () => dispatch => {
    dispatch({
        type: 'ADD_EVENT',
        payload: ''
    })
}