import apiRequest from './apiRequest'
import ACTION_TYPES from './actionTypes'


export const getAll = () => dispatch => {
    apiRequest.Request().getAll('employees')
        .then(response => {
            dispatch({
                type: ACTION_TYPES.GET_ALL_EMPLOYEES,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}
export const create = (data, onSuccess) => dispatch => {
    apiRequest.Request().create('employees', data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE_EMPLOYEE,
                payload: response.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    apiRequest.Request().update('employees', id, data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.UPDATE_EMPLOYEE,
                payload: {id, ...data}
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    apiRequest.Request().delete('employees', id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.DELETE_EMPLOYEE,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}