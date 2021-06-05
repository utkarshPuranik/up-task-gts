import { ACTION_TYPES } from '../actions/employee'
const initialState = {
    departmentList: [],
    employeeList: []
}

export const employeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.GET_ALL:
            return {
                ...state,
                employeeList: [...action.payload],
                departmentList: []
            }
            
        default: return state;
    }
}

