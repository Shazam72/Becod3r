export let getAuth=()=>{
    let auth = false;
fetch("http://localhost:3001/auth/")
  .then((resp) => resp.json())
  .then((resp) => {
    auth = resp.authenticated;
  });
  return auth;

}