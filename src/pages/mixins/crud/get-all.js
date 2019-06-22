import { mapActions } from 'vuex'
import store from '@store'
const currentToken = () => store().getters.currentToken
export const getAll = {
  data: () => ({
    data: [],
    serverPagination: {
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 0
    },
    filter: '',
    loading: false
  }),
  methods: {
    ...mapActions(['setFetching', 'setMessage']),
    async fetch (payload) {
      try {
        const token = currentToken()
        this.loading = true
        this.serverPagination = payload ? payload.pagination : this.serverPagination
        this.filter = payload ? payload.filter : this.filter
        this.setFetching({ fetching: true })
        this.data = await this.services.getAll(this.model, token, payload)
        this.serverPagination.rowsNumber = this.data ? this.data.count : 10
      } catch (e) {
        console.log(e)
      } finally {
        this.setFetching({ fetching: false })
        this.loading = false
      }
    }
  }
}
