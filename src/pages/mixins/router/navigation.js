export const navigation = {
  methods: {
    hideForm () {
      this.$router.push({ name: `${this.routerName}.index` })
    },
    edit (payload) {
      const id = payload.selected._id
      this.$router.push({ name: `${this.routerName}.edit`, params: { id } })
    },
    create () {
      this.$router.push({ name: `${this.routerName}.new` })
    },
    hideMain () {
      this.$router.push({ name: 'dashboard.index' })
    }
  }
}
