const employeeDefaultState = [];

export default (state = employeeDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EMPLOYEE': 
            return [
                ...state,
                action.employee
            ]
                   
        default: 
            return state;
    }
}