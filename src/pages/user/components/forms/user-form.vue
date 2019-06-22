<script>
import crudMixins from '@mixins/crud'
import { selectOptionsRoles } from '../../roles'
import { date } from 'quasar'
import services from '../../services'
import ccForm from '@components/form'
export default {
  components: {
    ccForm
  },
  name: 'CcUserForm',
  mixins: [crudMixins.postCreate, crudMixins.updateById, crudMixins.getById],
  data: () => ({
    selectOptionsRoles,
    model: 'users',
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
      this.$refs.fullname.validate()
      this.$refs.email.validate()
      this.$refs.role.validate()
      if (!this.$refs.fullname.hasError && !this.$refs.email.hasError && !this.$refs.role.hasError) return true
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
    },
    hide () {
      this.$router.push({ name: 'users.index' })
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
      <div class="text-h6 q-mb-md">Cadastro de Usuário</div>
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-sm-6">
          <q-input ref="fullname" :rules="[val => !!val || 'Campo Obrigatório']" color="grey-8" v-model="user.fullname" label="Nome Completo"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input ref="email" :rules="[val => !!val || 'Campo Obrigatório']" color="indigo-8" v-model="user.email" label="E-Mail" type="email"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input ref="password" :rules="[val => !!val || 'Campo Obrigatório']" color="indigo-8" v-model="user.password" type="password" clearable label="Password"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-select ref="role" :rules="[val => !!val || 'Campo Obrigatório']" class="col-xs-12 col-sm-3" v-model="user.role" emit-value color="indigo-8" label="Perfil" :options="selectOptionsRoles"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input v-model="user.createdAt" disable type="date" stack-label label="Data da Criação"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input v-model="user.updatedAt" disable type="date" stack-label label="Última alteração" />
        </div>
      </div>
    </template>
  </cc-form>
</template>
<style scoped>
</style>
