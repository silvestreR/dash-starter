export default {
  MAIN_SET_FETCHING (state, obj) {
    state.fetching = obj.fetching
  },
  MAIN_SET_MESSAGE (state, obj) {
    state.messages[obj.type] = obj.message
  }
}
