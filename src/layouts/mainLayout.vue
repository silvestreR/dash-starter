<script>
import { mapActions, mapGetters } from 'vuex'
import { translate } from '@in-house-functions/translateRoles'
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      loading: false
    }
  },
  filters: {
    translate
  },
  methods: {
    ...mapGetters(['currentToken', 'currentUser']),
    ...mapActions(['attemptLogoutUser']),
    doLogout () {
      const token = this.currentToken()
      this.loading = true
      setTimeout(() => {
        this.attemptLogoutUser(token)
        this.loading = false
        this.$router.push('/auth')
      }, 1000)
    }
  }
}
</script>

<template>
  <q-layout
    ref="layout"
    view="lhh Lpr lFf">
    <q-header class="bg-grey-3 text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-btn :loading="loading" class="fixed-right q-mt-sm q-mr-sm" @click="doLogout" dense flat round icon="exit_to_app" />
        <q-toolbar-title>
          <!-- Dashboard Starter -->
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer :content-class="['back', 'q-pa-sm']" v-model="leftDrawerOpen" side="left">
      <q-list dark>
        <p class="header-user-name" align="center">{{currentUser().fullname}}</p>
        <p class="header-user-role" align="center">{{currentUser().role | translate}}</p>
        <p align="center"><router-link to="/"><img style="max-width: 200px" src="../assets/logo.svg"></router-link></p>
        <q-item to="/users">
          <q-item-section avatar>
            <q-icon name="account_circle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Usuários</q-item-label>
            <q-item-label caption>Cadastro</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container class="bg-grey-3">
      <q-page padding>
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">
        <router-view />
      </transition>
    </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="css">
.back {
  /* background-color: rgba(118,71,114,1); */
  /* background-color: rgba(69,68,108,1); */
  /* background-color: rgba(500, 555, 555, 0.9); */
  /* background-color: rgba(93,96,139,1); */
  /* background: rgb(2,0,36); */
  /* background: linear-gradient(0deg, rgba(25,46,94,1) 23%, rgba(31,126,196,1) 86%); */
background: linear-gradient(0deg, rgba(203,221,235,1)  5%, rgba(25,46,94,1) 65%);
  /* background-color: rgba(62,64,149,1); */
}
.header-user-name{
  color: white;
  font-size:200%
}
.header-user-role{
  color: white;
  font-size:100%
}
</style>
