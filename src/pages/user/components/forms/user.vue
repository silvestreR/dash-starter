<script>
import crudMixins from '@mixins/crud'
import router from '@mixins/router'
import { date } from 'quasar'
import services from '../../services'
import ccUserForm from './user-form'
import ccForm from '@components/form'
import ccAddress from '@components/address'
import ccPhone from '@components/phone'
export default {
  components: {
    ccForm,
    ccUserForm,
    ccAddress,
    ccPhone
  },
  name: 'CcUser',
  mixins: [crudMixins.postCreate, crudMixins.updateById, crudMixins.getById, router.navigation],
  data: () => ({
    model: 'users',
    routerName: 'user',
    services,
    tabConfig: {
      one: 'fas fa-user',
      two: 'fas fa-home',
      tree: 'fas fa-user'
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
      phones: [],
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
      const { createdAt, updatedAt } = currentData
      this.user = currentData
      this.user.password = ''
      this.user.createdAt = date.formatDate(createdAt, 'YYYY-MM-DD')
      this.user.updatedAt = date.formatDate(updatedAt, 'YYYY-MM-DD')
    },
    setAddress (payload) {
      this.user.address = payload.address
    },
    sync (payload) {
      this.user.phones = payload.data
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
    <template slot="tab-3">
      <cc-phone
        :phones="user.phones"
        @sync="sync">
      </cc-phone>
    </template>
  </cc-form>
</template>
<style scoped>
</style>
