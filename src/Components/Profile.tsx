import React from 'react'
import {useDispatch} from "react-redux"

const Profile = () => {
    const dispatch=useDispatch()
  return (
    <div>
      <h2>Profile Section</h2>
      <button onClick={()=>dispatch({type:"logout"})}>Log Out</button>
    </div>
  )
}

export default Profile
