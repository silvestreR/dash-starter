<script>
import { selectOptionsRoles } from '../../roles'
export default {
  name: 'ccUserForm',
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    selectOptionsRoles
  })
}
</script>

<template>
    <div class="text-h6 q-mb-md">Cadastro de Usuário
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
    </div>
</template>

<style lang="css" scoped>
</style>
