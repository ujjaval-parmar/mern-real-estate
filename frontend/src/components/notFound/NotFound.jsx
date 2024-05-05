import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'


const NotFound = () => {

  const navigate = useNavigate();
  const error = useRouteError();

  console.log(error.message);

  return (
    <div>
      {/* <h2>Error: {error.message ? error.message : error}</h2> */}
      {error.statusText ? 
      <h2>{error.statusText} : {error.error.message}</h2> :
      <h2>{error.message}</h2>
      }
      
      <button onClick={()=> navigate('/')}>Go Home</button>
    </div>
  )
}

export default NotFound