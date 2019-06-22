import store from '../store'
const isAuthRoute = route => route.path.indexOf('/auth') !== -1

export default (to, from, next) => {
  if (!isAuthRoute(to)) {
    store().dispatch('checkUserToken')
      .then(() => {
        next()
      })
      .catch(() => {
        next('/auth')
      })
  } else {
    next()
  }
}

// => Com autenticação nas Rotas! <==
// export default (to, from, next) => {
//   store.dispatch('checkRecordInProgress')
//   store.dispatch('checkCounter')
//   if (!isAuthRoute(to) && !isLogged()) {
//     store.dispatch('checkUserToken')
//       .then(() => {
//         if (to.matched.some(record => record.meta.is_admin)) {
//           if (isAdmin()) {
//             next()
//           } else {
//             console.log('hmmmmmmmmm')
//             next({ name: 'dashboard.index' })
//           }
//         } else {
//           next()
//         }
//       })
//       .catch(() => {
//         // No token, or it is invalid
//         next('/auth') // redirect to login
//       })
//   } else {
//     next()
//   }
// }
