import { mapActions } from 'vuex'
import store from '@store'
const currentToken = () => store().getters.currentToken
export const postCreate = {
  methods: {
    ...mapActions(['setFetching', 'setMessage']),
    submit (data) {
      if (this.isValid) {
        if (this.isEditing) {
          this.update(data)
        } else {
          this.save(data)
        }
      }
    },
    async save (data) {
      try {
        const token = currentToken()
        this.setFetching({ fetching: true })
        await this.services.postCreate(this.model, token, { ...data })
        this.setMessage({ type: 'success', message: 'Sucesso' })
        this.hideForm()
      } catch (e) {
        console.log('Erro', e)
      } finally {
        this.setFetching({ fetching: false })
      }
    }
  }
}
