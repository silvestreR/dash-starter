<script>
import services from '@in-house-functions/services'
import { mapActions } from 'vuex'
import { selectOptionsUFMethod } from '@in-house-functions/selectOptionsUF'
export default {
  name: 'ccAddress',
  props: {
    address: {
      type: Object,
      default: () => ({
        zipCode: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: ''
      })
    },
    disable: {
      type: Boolean,
      default: () => false
    }
  },
  data: () => ({
    selectOptionsUFMethod
  }),
  methods: {
    ...mapActions(['setMessage', 'setFetching']),
    async getAddress (cep) {
      try {
        if (!cep || cep.length !== 10) return
        const cepFormat = cep.replace('.', '').replace('-', '')
        this.setFetching({ fetching: true })
        const address = await services.getCep(cepFormat)
        if (address.erro) {
          this.setMessage({ type: 'warning', message: 'CEP não encontrado' })
          this.$emit('setAddress', { address: { street: '', complement: '', neighborhood: '', city: '', state: '' } })
        }
        this.$emit('setAddress', { address: {
          zipCode: address.cep,
          street: address.logradouro,
          complement: address.complemento,
          neighborhood: address.bairro,
          city: address.localidade,
          state: address.uf
        }
        })
      } catch (err) {
        console.log('erro', err)
      } finally {
        this.setFetching({ fetching: false })
      }
    }
  }
}
</script>

<template>
  <div class="text-h6 q-mb-md">Endereço
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-sm-3">
        <q-input :readonly="disable" :disabled="disable" color="indigo-8" @blur="getAddress(address.zipCode)" mask="##.###-###" v-model="address.zipCode" label="CEP"/>
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input :readonly="disable" :disabled="disable" color="indigo-8" v-model="address.number" label="Número"/>
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input :readonly="disable" :disabled="disable" color="indigo-8" v-model="address.street" label="Rua"/>
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input :readonly="disable" :disabled="disable" color="indigo-8" v-model="address.neighborhood" label="Bairro"/>
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input :readonly="disable" :disabled="disable" color="indigo-8" v-model="address.city" label="Cidade"/>
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-select color="indigo-8" v-model="address.state" label="UF" :options="selectOptionsUFMethod" :display-value="address.state"/>
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input :readonly="disable" :disabled="disable" color="indigo-8" v-model="address.complement" label="Complemento"/>
      </div>
    </div>
  </div>
</template>

<style>
</style>
