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
    loading: false,
    loadingReset: false
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
    resetPassword () {
      this.loadingReset = true
      setTimeout(() => {
        this.loadingReset = false
        this.$router.push({ name: 'reset-password.index', params: { token: '0' } })
      }, 1000)
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
    <div>
      <q-btn class="full-width" :loading="loading" color="blue-4" @click="signIn" :disabled="isValid">Entrar</q-btn>
    </div>
    <div class="q-mt-sm">
      <q-btn class="full-width" :loading="loadingReset" flat color="blue-6" no-caps size="12px" @click="resetPassword">Esqueci minha senha</q-btn>
    </div>
  </div>
</template>

<style>
</style>
