import { combineReducers } from "redux";
import { departmentReducer } from './department'
import { employeeReducer } from './employee'

export const reducers = combineReducers({
    departmentReducer,
    employeeReducer
})