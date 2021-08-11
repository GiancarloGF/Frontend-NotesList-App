import React, {useState} from 'react';
const LoginForm=({handleLogin,})=>{
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const handleUsername = ({target}) =>setUsername(target.value) 
    const handlePassword= ({target}) =>setPassword(target.value)
    const handleLoginMain=(event) => {
      event.preventDefault();
      handleLogin(username, password);
      setUsername('')//To clean the username input.
      setPassword('')//To clean the password input.
    }
      return (
        <>

          <div >
            <form onSubmit={handleLoginMain}>
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
