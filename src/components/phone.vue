
<script>
import ccTable from '@components/custom-table'
import { columns } from '@support/table/phone-columns'
export default {
  name: 'ccPhone',
  components: {
    ccTable
  },
  props: {
    phones: {
      type: Array,
      default: () => []
    },
    phone: {
      type: Object,
      default: () => ({
        description: '',
        number: ''
      })
    }
  },
  data: () => ({
    columns
  }),
  methods: {
    deleteRow () {
      this.$emit('delete', { phones: this.selected })
      this.selected = []
    },
    add () {
      const data = this.phones
      const phone = { ...this.phone }
      data.push(phone)
      this.$emit('add', { data })
      this.reset()
    },
    reset () {
      this.phone.number = ''
      this.phone.description = ''
    },
    sync (payload) {
      const data = payload.data
      this.$emit('sync', { data })
    }
  }
}
</script>

<template>
  <div class="text-h6 q-mb-md">Telefones
    <div class="row q-col-gutter-md">
      <div class="col-xs-12 col-sm-3">
        <q-input color="indigo-8" v-model="phone.description" label="Descrição" placeholder="Particular"/>
      </div>
      <div class="col-xs-12 col-sm-3">
        <q-input unmasked-value mask='(##)#####-####' color="indigo-8" v-model="phone.number" label="Número"/>
      </div>
      <div class="col-xs-12 col-sm-2 q-mb-xl">
        <q-btn :disable="!phone.description || !phone.number" color="yellow-8" label="Incluir" @click="add"/>
      </div>
    </div>
    <cc-table
      :columns="columns"
      rowKey="number"
      :visibleColumns="['number', 'description']"
      :data="phones"
      @sync="sync">
    </cc-table>
  </div>
</template>

<style>
</style>
