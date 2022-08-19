

export default function({redirect, store}){
  console.log("middleware ", store.state.auth)
  const isAuthenticated = store.state.auth.user? true :false

  // if(!isAuthenticated){
  //   redirect({name:'sign-in'})
  // }
}