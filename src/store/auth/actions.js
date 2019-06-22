const JwtDecode = require('jwt-decode')
import { isEmpty } from 'lodash'
import { postLogin, getLogin, deleteLogout } from '@auth/services'
import { userTokenStorageKey } from 'src/config'
import storage from '@in-house-functions/localforage'

const clearStorages = ({ dispatch }) => {
  dispatch('setToken', '')
  dispatch('setUser', {})
  storage.removeItemLocalForage([ userTokenStorageKey ])
}

export const attemptLogin = async ({ dispatch }, payload) => {
  try {
    const token = await postLogin(payload.email, payload.password)
    const tokenDecoded = JwtDecode(token.token)
    tokenDecoded.token = token.token
    const currentUser = await getLogin(tokenDecoded)
    dispatch('setToken', token.token)
    dispatch('setUser', currentUser)
    return currentUser
  } catch (e) {
    return Promise.reject(new Error(e))
  }
}

export const setUser = ({ commit }, user) => {
  commit('SET_USER', user)
  Promise.resolve(user)
}

export const setToken = ({ commit }, payload) => {
  const token = (isEmpty(payload)) ? null : payload.token || payload
  storage.addItemLocalForage(userTokenStorageKey, token)
  commit('SET_TOKEN', token)
  return Promise.resolve(token)
}

export const attemptLogoutUser = async ({ dispatch }, token) => {
  clearStorages({ dispatch })
  await deleteLogout(token)
}

export const checkUserToken = ({ dispatch, state }) => {
  if (!isEmpty(state.token)) {
    return dispatch('loadUser', state.token)
  }
  return storage.getItemLocalForage(userTokenStorageKey)
    .then(token => {
      if (isEmpty(token)) {
        return Promise.reject(new Error('NO_TOKEN'))
      }
      return token
    })
    .then(token => dispatch('loadUser', token))
}

export const loadUser = async ({ dispatch }, payload) => {
  const token = payload
  const tokenDecoded = JwtDecode(token)
  tokenDecoded.token = token
  try {
    const user = await getLogin(tokenDecoded)
    dispatch('setToken', token)
    dispatch('setUser', user)
  } catch (e) {
    clearStorages({ dispatch })
    // store().dispatch('setMessage', { type: 'warning', message: 'Não foi possível carregar o usuário. Por favor faça login novamente' })
    return Promise.reject(new Error('FAIL_IN_LOAD_USER'))
  }
}
