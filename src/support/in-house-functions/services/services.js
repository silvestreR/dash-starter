import http from 'src/http'
export const authenticate = token => ({ 'Authorization': `Bearer ${token}` })

export const getAll = (model, token, options = { pagination: { rowsPerPage: 10, page: 1 }, filter: '' }) => {
  return http.get(`/${model}`, {
    headers: authenticate(token),
    data: {
      token: token
    },
    params: {
      limit: options.pagination.rowsPerPage,
      skip: options.pagination.page,
      filter: options.filter
    }
  })
    .then(response => response.data)
    .catch(err => Promise.reject(new Error(`FAIL_IN_GET_ALL: ${err}`)))
}

export const deleteById = (model, id, token) => {
  return http.delete(`/${model}/${id}`, {
    headers: authenticate(token)
  }).then(response => response.data)
    .catch(err => Promise.reject(new Error(`FAIL_IN_DELETE: ${err}`)))
}

export const getById = (model, token, id) => {
  return http.get(`/${model}/${id}`, {
    headers: authenticate(token)
  })
    .then(response => response.data)
    .catch(err => Promise.reject(new Error(`FAIL_IN_GET_BY_ID: ${err}`)))
}

export const updateById = (model, token, user, id) => {
  return http.put(`/${model}/${id}`, { ...user },
    { headers: authenticate(token) }
  )
    .then(response => response.data)
    .catch(err => Promise.reject(new Error(`FAIL_IN_UPDATE: ${err}`)))
}

export const postCreate = (model, token, users) => {
  return http.post(`/${model}`, { ...users },
    { headers: authenticate(token) }
  )
    .then(response => response.data)
    .catch(err => Promise.reject(new Error(`FAIL_IN_POST_CREATE: ${err}`)))
}
