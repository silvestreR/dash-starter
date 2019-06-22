<script>
import { mapActions, mapGetters } from 'vuex'
import { isEmpty } from 'lodash'

export default {
  name: 'Auth',
  data: () => ({
    user: {
      email: '',
      password: ''
    },
    loading: false
  }),
  computed: {
    isValid () {
      return (isEmpty(this.user.email) || isEmpty(this.user.password))
    }
  },
  methods: {
    ...mapActions(['attemptLogin', 'setMessage', 'setFetching']),
    ...mapGetters(['currentToken']),
    reset () {
      this.user.password = ''
    },
    async signIn () {
      const credentials = this.user
      try {
        await this.attemptLogin({ ...credentials })
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.$router.push('/')
        }, 2000)
      } catch (e) {
        this.reset()
        this.setMessage({ type: 'warning', message: 'Login Inválido' })
        console.log(e.message)
      }
    }
  }
}
</script>
<template>
  <div>
    <div>
      <div>
        <q-input class="q-mb-md" type="email" clearable label="E-mail" color="grey-10" v-model="user.email" />
      </div>
    </div>
    <div>
      <div>
        <q-input @keyup.enter="signIn" class="q-mb-lg" v-model="user.password" type="password" color="grey-10" clearable label="Senha" />
      </div>
    </div>
    <div style="margin: 10px 0px; width: 100%; height: 40px; padding-left: 33%; padding-right: auto; padding-top: 10px">
      <q-btn :loading="loading" color="blue-8" size="15px" @click="signIn" :disabled="isValid">Entrar</q-btn>
    </div>
  </div>
</template>

<style>
</style>
