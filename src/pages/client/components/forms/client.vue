<script>
import crudMixins from '@mixins/crud'
import router from '@mixins/router'
import { date } from 'quasar'
import services from '../../services'
import ccForm from '@components/form'
import ccClientForm from './client-form'
import ccAddress from '@components/address'
export default {
  components: {
    ccForm,
    ccClientForm,
    ccAddress
  },
  name: 'CcClient',
  mixins: [crudMixins.postCreate, crudMixins.updateById, crudMixins.getById, router.navigation],
  data: () => ({
    model: 'clients',
    routerName: 'client',
    services,
    tabConfig: {
      one: 'fas fa-user',
      two: 'fas fa-home'
      // tree: 'fas fa-client',
      // four: 'fas fa-home',
      // five: 'fas fa-home'
    },
    client: {
      _id: null,
      company: '',
      fantasyname: '',
      createdAt: '',
      updatedAt: '',
      ie: '',
      cpf: '',
      cnpj: '',
      representative: '',
      address: {
        street: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: ''
      }
    }
  }),
  computed: {
    isValid () {
      const clientRef = this.$refs.client.$refs
      clientRef.company.validate()
      clientRef.fantasyname.validate()
      if (!clientRef.company.hasError && !clientRef.fantasyname.hasError) return true
      this.setMessage({ type: 'warning', message: 'Por favor, revise o campos obrigatórios' })
      return false
    }
  },
  methods: {
    setCurrentData (currentData) {
      const { createdAt, updatedAt } = currentData
      this.client = currentData
      this.client.createdAt = date.formatDate(createdAt, 'YYYY-MM-DD')
      this.client.updatedAt = date.formatDate(updatedAt, 'YYYY-MM-DD')
    },
    setAddress (payload) {
      this.client.address = payload.address
    }
  }
}
</script>

<template>
  <cc-form
    :tabs="tabConfig"
    @submit="submit(client)"
    @hide="hideForm">
    <template slot="tab-1">
      <cc-client-form
        ref="client"
        :client="client">
      </cc-client-form>
    </template>
    <template slot="tab-2">
      <cc-address
        :address="client.address"
        @setAddress="setAddress">
      </cc-address>
    </template>
  </cc-form>
</template>
<style scoped>
</style>
