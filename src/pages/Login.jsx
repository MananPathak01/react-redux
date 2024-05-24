import React from 'react'
import { useState } from 'react'
import {login, logout} from "../store"
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state)=>state.user.value.username)
  return (
    <div>
      This is login Page for user {username}
      <p>Username: {newUsername}</p>
      
      <input onChange={(event) => setNewUsername(event.target.value)}/>
      <button onClick={()=>dispatch(login({username: newUsername}))} >Login</button>
      <button onClick={()=>dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login