import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/authSlice';

const Register = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const registerHandle = () => {
    console.table(name, email, password)
    dispatch(signUpUser({ name, email, password }))
  }

  return (
    <div>
      <h3>Register</h3>
      <label htmlFor="">Name</label> <br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' /> <br />
      <label htmlFor="">Email</label><br />
      <input type="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' /><br />
      <label htmlFor="">Password</label><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /><br />
      <button className='reg' onClick={registerHandle}>
        <a href='/login'>Register</a></button>
    </div>
  )
}

export default Register;