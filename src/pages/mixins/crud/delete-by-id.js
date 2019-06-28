import { mapActions } from 'vuex'
import store from '@store'
const currentToken = () => store().getters.currentToken
export const deleteById = {
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
        this.services.deleteById(this.model, id, token).then(() => {
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
    remove (payload) {
      this.$q.dialog({
        title: 'Confirmação',
        message: 'Excluir ?',
        ok: 'SIM',
        cancel: 'NÃO'
      }).onOk(() => {
        const token = currentToken()
        const id = payload.selected._id
        this.setFetching({ fetching: true })
        this.services.deleteById(this.model, id, token).then(() => {
          this.fetch({ pagination: this.serverPagination })
          this.setFetching({ fetching: false })
          this.setMessage({ type: 'warning', message: 'Excluido' })
        })
          .catch((error) => {
            console.log(error)
            this.setFetching({ fetching: false })
          })
      }).onCancel(() => {
      })
    }
  }
}
