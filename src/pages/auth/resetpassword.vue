<script>
import { mapActions, mapGetters } from 'vuex'
import { isEmpty } from 'lodash'
import { resetPasswd, verifyEmail } from './services'

export default {
  name: 'ResetPassword',
  data: () => ({
    resetPasswd,
    verifyEmail,
    email: '',
    firstAttempt: '',
    secondAttempt: '',
    loading: false
  }),
  computed: {
    isEmailValid () {
      return !isEmpty(this.email)
    },
    isNewPassValid () {
      return this.firstAttempt && this.secondAttempt && this.firstAttempt === this.secondAttempt
    },
    validToken () {
      return this.$route.params.token.length > 10
    }
  },
  methods: {
    ...mapActions(['attemptLogin', 'setMessage', 'setFetching']),
    ...mapGetters(['currentToken']),
    async resetPassword () {
      const token = this.$route.params.token
      if (!this.isNewPassValid) {
        this.setMessage({ type: 'warning', message: 'Preencha corretamente as senhas' })
        return
      }
      try {
        await this.resetPasswd(token, this.firstAttempt)
        this.setMessage({ type: 'success', message: 'Senha alterada com sucesso!' })
      } catch (e) {
        this.setMessage({ type: 'warning', message: 'Erro ao alterar senha' })
        console.error(e)
      } finally {
        this.firstAttempt = ''
        this.secondAttempt = ''
        this.$router.push({ name: 'auth.index' })
      }
    },
    async sendEmail () {
      const email = this.email
      try {
        if (!email) {
          this.setMessage({ type: 'warning', message: 'Preencha o email' })
          return
        }
        await this.verifyEmail(email)
        this.setMessage({ type: 'success', message: 'Enviado! Verifique seu email' })
        this.$router.push({ name: 'auth.index' })
      } catch (e) {
        this.setMessage({ type: 'warning', message: 'Email não encontrado' })
        console.error(e)
      } finally {
        this.email = ''
      }
    }
  }
}
</script>
<template>
  <div>
    <div v-if="!validToken">
      <div>
        <q-input class="q-mb-md" type="email" clearable label="E-mail cadastrado" color="grey-10" v-model="email" />
      </div>
      <q-btn :loading="loading" flat color="blue-8" size="15px" @click="sendEmail">Enviar confirmação</q-btn>
    </div>
    <div v-if="validToken">
      <div>
        <q-input class="q-mb-md" type="password" clearable label="Digite a nova senha" color="grey-10" v-model="firstAttempt" />
      </div>
      <div>
        <q-input class="q-mb-md" type="password" clearable label="Confirme a senha" color="grey-10" v-model="secondAttempt" />
      </div>
      <q-btn :loading="loading" flat color="blue-8" size="15px" @click="resetPassword">Enviar confirmação</q-btn>
    </div>
  </div>
</template>

<style>
</style>
