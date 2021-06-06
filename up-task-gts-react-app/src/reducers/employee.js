import ACTION_TYPES from '../actions/actionTypes'
const initialState = {
    employeeList: []
}

export const employeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.GET_ALL_EMPLOYEES:
            return {
                ...state,
                employeeList: [...action.payload],
                // departmentList: []
            }
            
        default: return state;
    }
}

