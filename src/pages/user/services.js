import services from '@in-house-functions/services'
import http from 'src/http'

export const getAll = services.getAll
export const deleteById = services.deleteById
export const updateById = services.updateById
export const getById = services.getById
export const postCreate = services.postCreate

export const getAllUserType = (model, token, options = { pagination: { rowsPerPage: 10, page: 0 }, filter: '' }, columns) => {
  return http.get('/users', {
    headers: services.authenticate(token),
    data: {
      token
    },
    params: {
      limit: options.pagination.rowsPerPage,
      skip: options.pagination.page,
      filter: options.filter,
      columns: columns
    }
  })
    .then(response => response.data)
    .catch(err => Promise.reject(new Error(`FAIL_IN_GET_ALL_USER_TYPE: ${err}`)))
}

export default {
  getAll,
  deleteById,
  updateById,
  getById,
  postCreate,
  getAllUserType
}
