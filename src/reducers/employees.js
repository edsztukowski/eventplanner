const employeeDefaultState = [
    {
        firstName: 'Ed',
        lastName: 'Sztukowski',
        age: 30,
        position: 'Manager',
        hourlyWage: 30,
        remainingPTO: 80,
    },
    {
        firstName: 'Courtney',
        lastName: 'Croft',
        age: 29,
        position: 'Mrs. Manager',
        hourlyWage: 300,
        remainingPTO: 25,
    }
];

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