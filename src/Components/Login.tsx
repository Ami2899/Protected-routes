import React from 'react'
import {useDispatch} from "react-redux"

const Login = () => {
    const dispatch=useDispatch()
  return (
    <div>
      <h2>Log In</h2>
      <button onClick={()=>dispatch({type:"login"})}>Log In</button>
    </div>
  )
}

export default Login
