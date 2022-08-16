
import { auth } from '~/plugins/firebase.js'
import { firebase } from '~/plugins/firebase.js'

export default (context) => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
         store.commit('auth/setUser', user)
         resolve()
       })
  })
}