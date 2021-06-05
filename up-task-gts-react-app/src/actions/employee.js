import apiRequest from './apiRequest'

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    GET_ALL: 'GET_ALL'
}


export const getAll = () => dispatch => {
    apiRequest.Request().getAll('employees')
        .then(response => {
            dispatch({
                type: ACTION_TYPES.GET_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}