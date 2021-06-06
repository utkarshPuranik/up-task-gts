import apiRequest from './apiRequest'
import ACTION_TYPES from './actionTypes'

export const getAll = () => dispatch => {
    apiRequest.Request().getAll('departments')
        .then(response => {
            dispatch({
                type: ACTION_TYPES.GET_ALL_DEPARTMENTS,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    apiRequest.Request().create('departments', data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE_DEPARTMENT,
                payload: response.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    apiRequest.Request().update('departments', id, data)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.UPDATE_DEPARTMENT,
                payload: {id, ...data}
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    apiRequest.Request().delete('departments', id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.DELETE_DEPARTMENT,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}