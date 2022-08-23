/*export default function({redirect, store}){
  console.log("middleware ", store.state.auth)
  const isAuthenticated = store.state.auth.user? true :false

   if(!isAuthenticated){
    redirect({name:'sign-in'})
   }
}*/


export default function ({ store, redirect }) {
  // If the user is not authenticated
  /*if (!store.state.auth.user) {
    console.log(store.state.auth.user)
    return redirect({name:'sign-in'})
  }*/
}