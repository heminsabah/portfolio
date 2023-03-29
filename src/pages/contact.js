import React from 'react'
import { useSelector, useDispatch } from "react-redux"; 

import { login, logout } from '../redux/redux';
const Contact = () => {
  const email = useSelector((state)=> state.user.data.email)
  const dispatch = useDispatch();
  return (
    
    <form >
      <div>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
         
        />
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          name="password"
          
        />
      </div>
     
    </form>

    
       
  )
}

export default Contact