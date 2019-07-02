<script>
import crudMixins from '@mixins/crud'
import services from '../../services'
import ccForm from '@components/form'
// import { columnsEmail } from '@helpers/columns/tableEmail'
// import ccPhone from '@components/forms/phone'
// import ccEmail from '@components/forms/email'
// import ccAddress from '@components/forms/address'
export default {
  components: {
    ccForm
    // ccPhone,
    // ccAddress,
    // ccEmail
  },
  name: 'CcClientForm',
  mixins: [crudMixins.postCreate, crudMixins.updateById, crudMixins.getById],
  data: () => ({
    model: 'clients',
    services,
    tabConfig: {
      one: 'fas fa-home'
      // two: 'fas fa-home',
      // tree: 'fas fa-client',
      // four: 'fas fa-home',
      // five: 'fas fa-home'
    },
    client: {
      _id: null,
      company: '',
      fantasyname: '',
      ie: '',
      cnpj: '',
      cpf: '',
      status: true,
      representative: '',
      emails: [],
      phones: [],
      address: {
        street: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: ''
      }
    },
    email: {
      mail: '',
      description: ''
    },
    phone: {
      type: '',
      description: '',
      number: ''
    }
  }),
  mounted () {
    this.fetch()
  },
  computed: {
    isEditing () {
      return this.client._id
    },
    isValid () {
      this.$refs.company.validate()
      this.$refs.fantasyname.validate()
      if (!this.$refs.company.hasError && !this.$refs.fantasyname.hasError) return true
      this.setMessage({ type: 'warning', message: 'Por favor, revise o campos obrigatórios' })
      return false
    }
  },
  methods: {
    setCurrentUser (currentUser) {
      const { _id, company, fantasyname, ie, cnpj, cpf, status, representative, phones, emails, address } = currentUser
      this.client._id = _id
      this.client.company = company
      this.client.fantasyname = fantasyname
      this.client.ie = ie
      this.client.cnpj = cnpj
      this.client.cpf = cpf
      this.client.status = status
      this.client.representative = representative
      this.client.emails = emails
      this.client.phones = phones
      address ? this.client.address = address : this.client.address = this.client.address
    },
    hide () {
      this.$router.push({ name: 'clients.index' })
    }
  }
}
</script>

<template>
  <cc-form
    :tabs="tabConfig"
    @submit="submit"
    @hide="hide">
    <template slot="tab-1">
      <div class="text-h6 q-mb-md">Cadastro de Clientes</div>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-sm-6">
          <q-input ref="company" :rules="[val => !!val || 'Campo Obrigatório']" color="grey-8" v-model="client.company" label="Nome Cliente"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input ref="fantasyname" :rules="[val => !!val || 'Campo Obrigatório']" color="indigo-8" v-model="client.fantasyname" label="Nome Fantasia"/>
        </div>
      </div>
    </template>
  </cc-form>
</template>
<style scoped>
</style>
