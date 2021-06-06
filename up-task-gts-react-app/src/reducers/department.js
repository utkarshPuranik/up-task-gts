import ACTION_TYPES from '../actions/actionTypes'
const initialState = {
    departmentList: [],
}

export const departmentReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.GET_ALL_DEPARTMENTS:
            return {
                ...state,
                // employeeList: [],
                departmentList: [...action.payload]
            }

        default: return state;
    }
}
