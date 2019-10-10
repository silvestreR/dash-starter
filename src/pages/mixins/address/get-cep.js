import { mapActions } from 'vuex'
import services from '@in-house-functions/services'
export const getCep = {
  data: () => ({
    origin: { cep: '', street: '', number: '', complement: '', neighborhood: '', city: '', state: '' },
    destination: { cep: '', street: '', number: '', complement: '', neighborhood: '', city: '', state: '' }
  }),
  methods: {
    ...mapActions(['setFetching', 'setMessage']),
    async getAddress (cep, type) {
      try {
        if (!cep || cep.length !== 10) return
        const cepFormat = cep.replace('.', '').replace('-', '')
        this.setFetching({ fetching: true })
        const address = await services.getCep(cepFormat)
        if (address.erro) {
          this.setMessage({ type: 'warning', message: 'CEP não encontrado' })
          this[`${type}`].street = ''
          this[`${type}`].complement = ''
          this[`${type}`].neighborhood = ''
          this[`${type}`].city = ''
          this[`${type}`].state = ''
          this.setAddress({}, type)
        }
        this[`${type}`].street = address.logradouro
        this[`${type}`].complement = address.complemento
        this[`${type}`].neighborhood = address.bairro
        this[`${type}`].city = address.localidade
        this[`${type}`].state = address.uf
        this.setAddress(address, type)
      } catch (err) {
        console.log('erro', err)
      } finally {
        this.setFetching({ fetching: false })
      }
    }
  }
}
