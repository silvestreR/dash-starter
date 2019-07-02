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
        const currentData = await this.services.getById(this.model, token, id)
        this.setCurrentData(currentData)
      } catch (e) {
        console.log('Erro:', e)
      } finally {
        this.setFetching({ fetching: false })
      }
    }
  }
}
