import { mapActions } from 'vuex'
import store from '@store'
const currentToken = () => store().getters.currentToken
export const getById = {
  methods: {
    ...mapActions(['setFetching', 'setMessage']),
    async fetch () {
      try {
        const id = this.$route.params.id
        const token = currentToken()
        if (!id) return
        this.setFetching({ fetching: true })
        const currentUser = await this.services.getById(this.model, token, id)
        this.setCurrentUser(currentUser)
      } catch (e) {
        console.log('Erro:', e)
      } finally {
        this.setFetching({ fetching: false })
      }
    }
  }
}
