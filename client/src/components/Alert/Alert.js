import React from 'react'
import { useSelector } from 'react-redux';

function Alert() {

    const err=useSelector(state=>state.userReducer.errors)

  return (
    <div>
   <p id='err_reg'>
    {err&&err.msg?<p>{err.msg}</p>:
    err&& err.errors[0].msg ?   <p>{err.errors[0].msg }</p>: 
   err&& err.errors[1].msg? <p>{err.errors[1].msg }</p>: null  }
    </p>

    
    </div>
  )
}

export default Alert