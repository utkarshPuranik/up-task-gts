import { ACTION_TYPES } from '../actions/department'
const initialState = {
    departmentList: [],
    employeeList: []
}

export const departmentReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.GET_ALL:
            return {
                ...state,
                employeeList: [],
                departmentList: [...action.payload]
            }

        default: return state;
    }
}
