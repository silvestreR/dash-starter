export default {
  SET_USER (state, payload) {
    const user = payload
    state.user = user
  },

  SET_TOKEN (state, payload) {
    const token = payload
    state.token = token
  },

  RESET_USER (state) {
    state.token = null
    state.user = null
  }
}
