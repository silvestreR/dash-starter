<script>
import crudMixins from '@mixins/crud'
import router from '@mixins/router'
import { date } from 'quasar'
import services from '../../services'
import ccForm from '@components/form'
import ccUserForm from './user-form'
export default {
  components: {
    ccForm,
    ccUserForm
  },
  name: 'CcUser',
  mixins: [crudMixins.postCreate, crudMixins.updateById, crudMixins.getById, router.navigation],
  data: () => ({
    model: 'users',
    routerName: 'user',
    services,
    tabConfig: {
      one: 'fas fa-user'
      // two: 'fas fa-home',
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
      password: ''
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
    setCurrentUser (currentUser) {
      const { _id, username, fullname, email, role, status, createdAt, updatedAt } = currentUser
      this.user._id = _id
      this.user.username = username
      this.user.fullname = fullname
      this.user.email = email
      this.user.role = role
      this.user.status = status
      this.user.createdAt = date.formatDate(createdAt, 'YYYY-MM-DD')
      this.user.updatedAt = date.formatDate(updatedAt, 'YYYY-MM-DD')
    }
  }
}
</script>

<template>
  <cc-form
    :tabs="tabConfig"
    @submit="submit"
    @hide="hideForm">
    <template slot="tab-1">
      <cc-user-form
        ref="user"
        :user="user">
      </cc-user-form>
    </template>
  </cc-form>
</template>
<style scoped>
</style>
