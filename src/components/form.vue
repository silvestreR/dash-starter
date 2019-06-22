<script>
import ccHeader from '@components/header'
export default {
  name: 'ccForm',
  components: {
    ccHeader
  },
  props: {
    tabs: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    tab: 'tab-1'
  }),
  methods: {
    submit () {
      this.$emit('submit')
    },
    hide () {
      this.$emit('hide')
    }
  }
}
</script>
<template lang="html">
  <div class="bg-grey-1 q-mt-sm">
    <cc-header
      icon="fas fa-user"
      color="indigo-8"
      @submit="submit"
      @hide="hide">
    </cc-header>
  <template>
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 100%">
        <q-card>
          <q-tabs v-model="tab" class="bg-grey-4 text-grey-5" active-color="grey-8" indicator-color="transparent" align="justify" narrow-indicator >
            <q-tab name="tab-1" :icon="tabs.one"/>
            <q-tab v-if="tabs.two" name="tab-2" :icon="tabs.two"/>
            <q-tab v-if="tabs.tree" name="tab-3" :icon="tabs.tree"/>
            <q-tab v-if="tabs.four" name="tab-4" :icon="tabs.four"/>
            <q-tab v-if="tabs.five" name="tab-5" :icon="tabs.five"/>
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="tab-1">
              <slot name="tab-1"></slot>
            </q-tab-panel>
            <q-tab-panel name="tab-2">
              <slot name="tab-2"></slot>
            </q-tab-panel>
            <q-tab-panel name="tab-3">
              <slot name="tab-3"></slot>
            </q-tab-panel>
            <q-tab-panel name="tab-4">
              <slot name="tab-4"></slot>
            </q-tab-panel>
            <q-tab-panel name="tab-5">
              <slot name="tab-5"></slot>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </template>
  </div>
</template>

<style lang="css" scoped>
</style>
