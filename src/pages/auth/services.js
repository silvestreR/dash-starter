import http from 'src/http'
import services from '@in-house-functions/services'

export const postLogin = (email, password, checkThisUserOnly = false) => {
  return http.post('/authentications', {
    usernameOrEmail: email,
    password,
    deviceName: 'Notebook',
    networkIp: '177.255.255.255',
    platformOS: 'LinuxOS',
    checkThisUserOnly
  })
    .then(response => response.data)
    .catch(err => Promise.reject(new Error(`FAIL_IN_FIND_USER: ${err}`)))
}

export const getLogin = (auth) => {
  return http.get(`/users/${auth.userId}`, {
    headers: services.authenticate(auth.token)
  })
    .then(response => response.data)
    .catch(err => Promise.reject(new Error(`FAIL_IN_LOAD_USER: ${err}`)))
}

export const deleteLogout = (token) => {
  return http.delete('/authentications', {
    headers: services.authenticate(token),
    data: { token }
  }
  ).then(response => response.data)
    .catch(err => Promise.reject(new Error(`FAIL_IN_LOGOUT_USER: ${err}`)))
}

export const verifyEmail = email => {
  return http.get(`/users/verify/email`, {
    params: {
      email: email
    }
  })
    .then(response => response.data)
    .catch(err => Promise.reject(new Error(`FAIL_IN_FIND_USER_EMAIL: ${err}`)))
}

export const resetUserPassword = (token, passwd) => {
  return http.put(`/users/resetpasswd/${token}`, { passwd },
    { headers: services.authenticate(token) }
  )
    .then(response => response.data)
    .catch(err => Promise.reject(new Error(`FAIL_IN_UPDATE: ${err}`)))
}
