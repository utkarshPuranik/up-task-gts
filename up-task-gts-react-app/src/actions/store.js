import { createStore, applyMiddleware , compose, combineReducers } from 'redux'
import thunk from 'redux-thunk' 
import{ reducers } from '../reducers'

const initialState = {
    departmentList: [],
    employeeList: []
};

export const store = createStore(
    reducers,
    initialState,
    compose(
                applyMiddleware(thunk),
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        );
        

