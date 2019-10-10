export const validations = {
  computed: {
    isRequired (val) {
      return [val => !!val || 'Campo Obrigatório']
    }
  }
}
