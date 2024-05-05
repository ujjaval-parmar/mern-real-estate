import React, { useContext } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import './layout.scss'
import { AuthContext } from '../../context/AuthContext'


const RequireAuth = () => {

  const {currentUser } = useContext(AuthContext);

  if(!currentUser){
    return <Navigate to='/login' />
  }

  return (
    currentUser && (<div className='layout'>

      <header className='navBar'>
        <Navbar />
      </header>

      <div className="content">
        <Outlet />
      </div>

    </div>)
  )
}



const Layout = () => {
  return (
    <div className='layout'>

      <header className='navBar'>
        <Navbar />
      </header>

      <div className="content">
        <Outlet />
      </div>

    </div>
  )
}

export { Layout, RequireAuth };