<script>
import ccNotify from './components/alerts'
import ccFetch from './components/spinner'
export default {
  name: 'App',
  components: {
    ccNotify,
    ccFetch
  }
}
</script>

<template>
  <div id="q-app">
    <router-view />
    <cc-notify/>
    <cc-fetch/>
  </div>
</template>

<style>
</style>
