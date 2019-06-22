<script>
import { columns, visibleColumns } from '../table'
import ccTableMain from '@components/table-main'
import crudMixins from '@mixins/crud'
import services from '../services'

export default {
  name: 'CcUsers',
  mixins: [crudMixins.getAll, crudMixins.deleteById, crudMixins.updateById],
  components: {
    ccTableMain
  },
  data: () => ({
    columns,
    visibleColumns,
    model: 'users',
    services
  }),
  methods: {
    edit (payload) {
      const id = payload.selected._id
      this.$router.push({ name: 'user.edit', params: { id } })
    },
    create () {
      this.$router.push({ name: 'user.new' })
    },
    hide () {
      this.$router.push({ name: 'dashboard.index' })
    }
  }
}
</script>

<template>
  <div>
    <div class="overflow-hidden shadow-3 bg-white">
      <h5 class="q-pl-lg text-italic">USUÁRIOS</h5>
    </div>
    <cc-table-main
    labelButton="Usuário"
    :data="data"
    :columns="columns"
    :visibleColumns="visibleColumns"
    :allowBlock="true"
    :serverPagination="serverPagination"
    :loading="loading"
    @create="create"
    @hide="hide"
    @edit="edit"
    @block="block"
    @update="unBlock"
    @sync="fetch">
    </cc-table-main>
  </div>
</template>
<style scoped>
</style>
