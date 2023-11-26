import React from 'react'
import Logo from '../logo/logo'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import  './navbar.css'



function NNavbar() {

  const token = localStorage.getItem("token"); 
  const user = useSelector(state => state.userReducer.currentUser);
  const isAdmin = user && user.role === 'Admin';
  return (
    <div>
    
   <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <Logo/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
      
        
        </li>
        <li className="nav-item">
        
        </li>
        
        <li className="nav-item">
        {window.location.pathname!=="/"&&token ? <Link to={'/'} ><Button className='btdaw' variant="outline-secondary">Home</Button>{' '}</Link> :null}
        { !token ? <Link to={'Register'}><Button className='btdaw' variant="outline-secondary">Register</Button>{' '} </Link>:null}
        { !token ? <Link to={'/login'}> <Button variant="outline-secondary" className='btdaw' >Login</Button>{' '}</Link>:null}
        { token ? <Link to={'/Profil'}><Button variant="outline-secondary" className='btdaw' >Profil</Button>{' '}</Link>:null}
        <Link to={'/Product'}><Button variant="outline-secondary" className='btdaw'>Product</Button>{' '}</Link>
        { isAdmin ? <Link to={'/AddProduct'}><Button variant="outline-secondary" className='btdaw'>addproduct</Button>{' '}</Link>:null}
        
        { isAdmin ? <Link to={'/UserList'}><Button variant="outline-secondary" className='btdaw'>UserList</Button>{' '}</Link>:null}
        
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success btdaw " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>

   
  )
}

export default NNavbar