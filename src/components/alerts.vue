
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ccNotify',
  computed: {
    ...mapState(['global']),
    formatedSuccesMessage () {
      if (this.hasSuccessMessage()) {
        const msg = this.global.messages.success
        this.$q.notify({
          message: msg,
          timeout: 4000,
          color: 'teal-3',
          textColor: 'black',
          icon: 'error_outline',
          position: 'top'
        })
        this.setMessage({ type: 'success', message: '' })
      }
      return ''
    },
    formatedWarningMessage () {
      if (this.hasWarningMessages()) {
        const msg = this.global.messages.warning
        this.$q.notify({
          message: msg,
          timeout: 4000,
          color: 'yellow-3',
          textColor: 'black',
          icon: 'error_outline',
          position: 'top'
        })
        this.setMessage({ type: 'warning', message: '' })
      }
      return ''
    }
  },
  methods: {
    ...mapActions(['setMessage']),
    hasValidationMessages () {
      return this.global.messages.validation.length > 0
    },
    hasSuccessMessage () {
      return this.global.messages.success !== ''
    },
    hasErrorMessages () {
      return this.global.messages.error.length > 0
    },
    hasWarningMessages () {
      return this.global.messages.warning !== ''
    }
  }
}
</script>

<template>
  <div>
    <div>
      {{formatedSuccesMessage}}
    </div>
    <div>
      {{formatedWarningMessage}}
    </div>
  </div>
</template>

<style></style>
