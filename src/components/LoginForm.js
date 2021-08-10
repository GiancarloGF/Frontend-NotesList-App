
const LoginForm=({
  handleLogin,
  handleUsername, 
  handlePassword,
  username,
  password 
  })=>{
  
      return (
        <>

          <div >
            <form onSubmit={handleLogin}>
              <div>
                username
                <input
                  type="text"
                  value={username}
                  name="Username"
                  onChange={handleUsername}
                />
              </div>
              <div>
                password
                <input
                  type="password"
                  value={password}
                  name="Password"
                  onChange={handlePassword}
                />
              </div>
              <button type='submit' >Log in</button>
            </form>
            

          </div>
        </>
      )
}
export default LoginForm;
