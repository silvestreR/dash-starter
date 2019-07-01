import { mapActions } from 'vuex'
import store from '@store'
const currentToken = () => store().getters.currentToken
export const updateById = {
  methods: {
    ...mapActions(['setFetching', 'setMessage']),
    block (payload) {
      this.$q.dialog({
        title: 'Confirmação',
        message: 'Bloquear ?',
        ok: 'SIM',
        cancel: 'NÃO'
      }).onOk(() => {
        const token = currentToken()
        const id = payload.selected._id
        this.setFetching({ fetching: true })
        this.services.updateById(this.model, token, { status: false }, id).then(() => {
          this.fetch({ pagination: this.serverPagination })
          this.setFetching({ fetching: false })
          this.setMessage({ type: 'warning', message: 'Bloqueado' })
        })
          .catch((error) => {
            console.log(error)
            this.setFetching({ fetching: false })
          })
      }).onCancel(() => {
      })
    },
    async unBlock (payload) {
      try {
        const id = payload.selected._id
        const token = currentToken()
        this.setFetching({ fetching: true })
        await this.services.updateById(this.model, token, { status: true }, id)
        this.fetch({ pagination: this.serverPagination })
        this.setMessage({ type: 'success', message: 'Desbloqueado com sucesso' })
      } catch (e) {
        console.log('Erro: ', e)
      } finally {
        this.setFetching({ fetching: false })
      }
    },
    async update () {
      try {
        const user = this.user
        const id = this.user._id
        const token = currentToken()
        this.setFetching({ fetching: true })
        await this.services.updateById(this.model, token, { ...user }, id)
        this.hideForm()
        this.setMessage({ type: 'success', message: 'Alterado com sucesso' })
      } catch (e) {
        console.log('Erro: ', e)
      } finally {
        this.setFetching({ fetching: false })
      }
    }
  }
}
