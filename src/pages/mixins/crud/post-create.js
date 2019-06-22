import { mapActions } from 'vuex'
import store from '@store'
const currentToken = () => store().getters.currentToken
export const postCreate = {
  methods: {
    ...mapActions(['setFetching', 'setMessage']),
    submit () {
      if (this.isValid) {
        if (this.isEditing) {
          this.update()
        } else {
          this.save()
        }
      }
    },
    async save () {
      try {
        const user = this.user
        const token = currentToken()
        this.setFetching({ fetching: true })
        await this.services.postCreate(this.model, token, { ...user })
        this.setMessage({ type: 'success', message: 'Sucesso' })
        this.hide()
      } catch (e) {
        console.log('Erro', e)
      } finally {
        this.setFetching({ fetching: false })
      }
    }
  }
}
