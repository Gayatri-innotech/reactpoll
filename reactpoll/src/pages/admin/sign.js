import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../../redux/authSlice';

const Sign = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const authState = useSelector(state=>state.authSlice)
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log(email, password)
    dispatch(signInUser({email,password}))
  } 
  console.log(authState);

  useEffect(()=>{
    if(authState?.token){
    navigate('/home')
    }
  },[authState])
  
  const handleOnchange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <div>
      <h3>Admin Login</h3>
      {authState?.error}
      {authState?.loading ? 'true' : 'false'}
      <label htmlFor="">Email</label><br/>
    <input type="Email" value={email} onChange={handleOnchange} placeholder='Email'/><br/><br/>
    <label htmlFor="">Password</label><br/>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/><br/><br/>
    <button className='reg' onClick={handleLogin}>Login</button><br/>
    </div>
  )
}

export default Sign;