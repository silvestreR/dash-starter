<script>
import { columns, visibleColumns } from '../table'
import ccTableMain from '@components/table-main'
import crudMixins from '@mixins/crud'
import router from '@mixins/router'
import services from '../services'

export default {
  name: 'CcClients',
  mixins: [crudMixins.getAll, crudMixins.deleteById, crudMixins.updateById, router.navigation],
  components: {
    ccTableMain
  },
  data: () => ({
    columns,
    visibleColumns,
    model: 'clients',
    routerName: 'client',
    services
  })
}
</script>

<template>
  <div>
    <div class="overflow-hidden shadow-3 bg-white">
      <h5 class="q-pl-lg text-italic">CLIENTES</h5>
    </div>
    <cc-table-main
    labelButton="Clientes"
    :data="data"
    :columns="columns"
    :visibleColumns="visibleColumns"
    :allowBlock="true"
    :allowRemove="true"
    :serverPagination="serverPagination"
    :loading="loading"
    @create="create"
    @hide="hideMain"
    @edit="edit"
    @block="block"
    @remove="remove"
    @update="unBlock"
    @sync="fetch">
    </cc-table-main>
  </div>
</template>
<style scoped>
</style>
