import axios from 'axios';

const baseAPIURL = 'https://localhost:44380/api/';

export default {
    Request(url = baseAPIURL){
        return {
            getAll: entity => axios.get(url + entity),
            getById: (entity, id) => axios.get(url + entity + id),
            create: (entity, newDepartment) => axios.post(url + entity, newDepartment),
            update: (entity, id, updatedDepartment) => axios.put(url + entity, id, updatedDepartment),
            delete: (entity, id) => axios.delete(url + entity + id)
        }
    }
}