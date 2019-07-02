
<script>
import table from '@support/table/table-config'
export default {
  name: 'ccTable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    visibleColumns: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: String,
      default: () => '_id'
    }
  },
  data: () => ({
    table,
    selected: []
  }),
  methods: {
    remove (payload) {
      this.$q.dialog({
        title: 'Confirmação',
        message: 'Deseja realmente Excluir ?',
        ok: 'SIM',
        cancel: 'NÃO'
      }).onOk(() => {
        const data = [...this.data]
        this.selected.map(cur => {
          const pos = data.indexOf(cur)
          data.splice(pos, 1)
          this.$emit('sync', { data })
          this.selected = []
        })
      }).onCancel(() => {
      })
    }
  }
}
</script>

<template>
  <q-table
  :row-key="rowKey"
  :data="data"
  :columns="columns"
  :visible-columns="visibleColumns"
  :selected.sync="selected"
  :no-data-label="table.noDataLabel"
  :no-results-label="table.noResultsLabel"
  :filter="table.filter"
  :separator="table.separator"
  class="bg-grey-1"
  :loading="table.loading"
  :loading-label="table.loadingLabel"
  selection="multiple"
  :pagination.sync="table.paginationControl"
  :color="table.color">

  <template slot="top-selection">
    <div class="col-auto" />
      <q-btn color="negative" flat round icon="delete" @click="remove"/>
  </template>
  </q-table>
</template>

<style scoped>
</style>
