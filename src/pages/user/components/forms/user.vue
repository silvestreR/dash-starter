<script>
import crudMixins from '@mixins/crud'
import router from '@mixins/router'
import { date } from 'quasar'
import services from '../../services'
import ccForm from '@components/form'
import ccUserForm from './user-form'
import ccAddress from '@components/address'
export default {
  components: {
    ccForm,
    ccUserForm,
    ccAddress
  },
  name: 'CcUser',
  mixins: [crudMixins.postCreate, crudMixins.updateById, crudMixins.getById, router.navigation],
  data: () => ({
    model: 'users',
    routerName: 'user',
    services,
    tabConfig: {
      one: 'fas fa-user',
      two: 'fas fa-home'
      // tree: 'fas fa-user',
      // four: 'fas fa-home',
      // five: 'fas fa-home'
    },
    user: {
      _id: null,
      username: '',
      fullname: '',
      email: '',
      role: '',
      status: true,
      createdAt: '',
      updatedAt: '',
      password: '',
      address: {
        street: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: ''
      }
    }
  }),
  mounted () {
    this.fetch()
  },
  computed: {
    isEditing () {
      return this.user._id
    },
    isValid () {
      const userRef = this.$refs.user.$refs
      userRef.fullname.validate()
      userRef.email.validate()
      userRef.role.validate()
      if (!userRef.fullname.hasError && !userRef.email.hasError && !userRef.role.hasError) return true
      this.setMessage({ type: 'warning', message: 'Por favor, revise o campos obrigatórios' })
      return false
    }
  },
  methods: {
    setCurrentData (currentData) {
      const { _id, username, fullname, email, role, status, createdAt, updatedAt } = currentData
      this.user._id = _id
      this.user.username = username
      this.user.fullname = fullname
      this.user.email = email
      this.user.role = role
      this.user.status = status
      this.user.createdAt = date.formatDate(createdAt, 'YYYY-MM-DD')
      this.user.updatedAt = date.formatDate(updatedAt, 'YYYY-MM-DD')
    },
    setAddress (payload) {
      this.user.address.zipCode = payload.cep
      this.user.address.street = payload.logradouro
      this.user.address.complement = payload.complemento
      this.user.address.neighborhood = payload.bairro
      this.user.address.city = payload.localidade
      this.user.address.state = payload.uf
    }
  }
}
</script>

<template>
  <cc-form
    :tabs="tabConfig"
    @submit="submit(user)"
    @hide="hideForm">
    <template slot="tab-1">
      <cc-user-form
        ref="user"
        :user="user">
      </cc-user-form>
    </template>
    <template slot="tab-2">
      <cc-address
        :address="user.address"
        @setAddress="setAddress">
      </cc-address>
    </template>
  </cc-form>
</template>
<style scoped>
</style>
