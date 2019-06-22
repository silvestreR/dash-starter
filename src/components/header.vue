<script>
export default {
  name: 'ccHeader',
  data: () => ({
    btnShow: false,
    loadingCreate: false
  }),
  props: {
    labelBtnSubmit: {
      type: String,
      default: () => 'Salvar'
    },
    colorBtnSubmit: {
      type: String,
      default: () => 'blue-4'
    },
    iconBtnSubmit: {
      type: String,
      default: () => 'fas fa-save'
    },
    isValid: {
      type: Boolean,
      default: () => true
    },
    show: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    submit () {
      this.loadingCreate = true
      setTimeout(() => {
        this.loadingCreate = false
        this.$emit('submit')
      }, 1000)
    },
    hide () {
      this.$emit('hide')
    }
  }
}
</script>

<template>
  <div class="bg-grey-1 row q-mt-lg q-pl-lg q-pt-lg">
    <div class="col">
      <q-btn glossy :disable="!isValid" :loading="loadingCreate" class="q-mr-lg" :color="colorBtnSubmit" :label="labelBtnSubmit" @click="submit()"></q-btn>
      <q-btn glossy color="blue-4" class="q-mr-xl" label="Cancelar" @click="hide()"></q-btn>
    </div>
  </div>
</template>

<style>
</style>
