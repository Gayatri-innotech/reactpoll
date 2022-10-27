import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpUser } from '../../redux/authSlice';

const Login = () => {

  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [msg, setMsg] = useState("");
  const logState = useSelector(state=>state.authSlice)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(user, password)
    dispatch(signUpUser({ user, password }))
    navigate('/poll')
  }
  console.log(logState);
  const handleOnchange = (e) => {
    setUser(e.target.value);
  }

  return (
    <div>
      <h3>User Login</h3>
      <label htmlFor="">user</label><br />
      <input type="user" value={user} onChange={handleOnchange} placeholder='user' /><br /><br />
      <label htmlFor="">Password</label><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /><br /><br />
      <button className='reg' onClick={handleLogin}>Login</button><br />
      {msg}
    </div>
  )
}

export default Login;