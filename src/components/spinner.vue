
<script>
import { mapState } from 'vuex'
import { Loading } from 'quasar'

export default {
  name: 'ccFetch',
  computed: {
    ...mapState(['global']),
    fetching () {
      if (this.hasFetching()) {
        Loading.show()
        return ''
      }
      Loading.hide()
      return ''
    }
  },
  methods: {
    hasFetching () {
      return this.global.fetching
    }
  }
}
</script>

<template>
  <div>
    <div>
      {{fetching}}
    </div>
</div>
</template>

<style>
</style>
