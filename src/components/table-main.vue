<script>
import table from '@support/table/table-config'
export default {
  name: 'ccTableMain',
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
    allowBlock: {
      type: Boolean,
      default: () => false
    },
    allowRemove: {
      type: Boolean,
      default: () => false
    },
    allowAdd: {
      type: Boolean,
      default: () => true
    },
    allowEdit: {
      type: Boolean,
      default: () => true
    },
    labelButton: {
      type: String,
      default: () => ''
    },
    serverPagination: {
      type: Object,
      default: () => ({
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 20
      })
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    labelEditButton: {
      type: String,
      default: () => 'Alterar'
    }
  },
  beforeDestroy () {
    table.filter = ''
  },
  data: () => ({
    table,
    selected: [],
    loadingSync: false,
    loadingEdit: false,
    loadingNew: false,
    loadingHide: false,
    loadingCreate: false,
    loadingRemove: false,
    loadingBlock: false,
    loadingUpdate: false,
    filter: ''
  }),
  computed: {
    computedServerPagination: {
      get () {
        return this.serverPagination
      },
      set (payload) {
        this.$emit('sync', { pagination: payload, filter: this.filter })
      }
    },
    isBlock () {
      return this.selected[0] ? this.selected[0].status === false : false
    }
  },
  methods: {
    block () {
      this.loadingBlock = true
      setTimeout(() => {
        this.loadingBlock = false
        this.$emit('block', { selected: this.selected[0] })
        this.selected = []
      }, 1000)
    },
    remove () {
      this.$emit('remove', { selected: this.selected[0] })
      this.selected = []
    },
    edit () {
      this.loadingEdit = true
      setTimeout(() => {
        this.loadingEdit = false
        this.$emit('edit', { selected: this.selected[0] })
      }, 1000)
    },
    update () {
      this.loadingUpdate = true
      setTimeout(() => {
        this.loadingUpdate = false
        this.$emit('update', { selected: this.selected[0] })
        this.selected = []
      }, 1000)
    },
    create () {
      this.$emit('create')
    },
    hide () {
      this.$emit('hide')
    },
    sync (payload) {
      this.$emit('sync', { pagination: payload.pagination, filter: payload.filter })
    },
    syncByButton (payload) {
      this.loadingSync = true
      setTimeout(() => {
        this.loadingSync = false
        this.$emit('sync', { pagination: payload.pagination, filter: payload.filter })
        this.selected = []
      }, 1000)
    },
    search (payload) {
      this.$emit('sync', { pagination: this.serverPagination, filter: payload })
    }
  }
}
</script>
<template>
  <q-table
  row-key="_id"
  :data="data"
  :columns="columns"
  :visible-columns="visibleColumns"
  :selected.sync="selected"
  :no-data-label="table.noDataLabel"
  :no-results-label="table.noResultsLabel"
  :rows-per-page-label="table.rowsPerPageLabel"
  :separator="table.separator"
  :class="table.class"
  :loading-label="table.loadingLabel"
  color="orange-5"
  selection="single"
  :pagination.sync="computedServerPagination"
  :filter="filter"
  :loading="loading"
  @request="sync">
  <template slot="top-selection">
    <q-btn v-if="allowEdit" :loading="loadingEdit" color="blue-4" glossy @click="edit()" :label="labelEditButton" class="q-mr-sm" />
    <div class="col"/>
    <q-btn v-if="!isBlock && allowBlock" :loading="loadingBlock" color="negative" size="md" flat round delete icon="fas fa-ban" @click="block()"/>
    <q-btn v-if="isBlock && allowBlock" :loading="loadingUpdate" color="positive" size="md" flat round delete icon="fas fa-unlock-alt" @click="update()"/>
    <q-btn v-if="allowRemove" class="q-mr-xl" color="negative" size="md" flat round delete icon="fas fa-trash" @click="remove()"/>
  </template>

    <template slot="top-left">
      <q-input borderless dense debounce="500" @input="search" hide-underline color="blue-4" v-model="filter" placeholder="Busca">
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>

    <template slot="top-right">
      <q-btn v-if="allowAdd" class="q-mr-lg" glossy round color="grey-6" icon="fas fa-plus" @click="create()"/>
      <q-btn class="q-mr-lg" color="grey-6" glossy round icon="fas fa-chevron-left" @click="hide()"/>
      <q-btn class="q-mr-lg" color="grey-6" :loading="loadingSync" glossy round icon="fas fa-sync-alt" @click="syncByButton({ pagination: computedServerPagination, filter })"/>
    </template>
  </q-table>
</template>

<style lang="css">
</style>
