<script>
export default {
  name: 'ccClientForm',
  props: {
    client: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
  })
}
</script>

<template>
    <div class="text-h6 q-mb-md">Cadastro de Cliente
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-sm-6">
          <q-input ref="company" :rules="[val => !!val || 'Campo Obrigatório']" color="grey-8" v-model="client.company" label="Nome cliente"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input ref="fantasyname" :rules="[val => !!val || 'Campo Obrigatório']" color="indigo-8" v-model="client.fantasyname" label="Nome fantasia"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input color="indigo-8" v-model="client.cnpj" label="CNPJ"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input color="indigo-8" v-model="client.ie" label="Inscrição Estadual"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input color="indigo-8" v-model="client.cpf" label="CPF"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input color="indigo-8" v-model="client.representative" label="Representante"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input v-model="client.createdAt" disable type="date" stack-label label="Data da Criação"/>
        </div>
        <div class="col-xs-12 col-sm-6">
          <q-input v-model="client.updatedAt" disable type="date" stack-label label="Última alteração" />
        </div>
      </div>
    </div>
</template>

<style lang="css" scoped>
</style>
