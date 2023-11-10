import React from 'react'
import Logo from '../logo/logo'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import  './navbar.css'



function NNavbar() {
  return (
    
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
        <Link to={'/'} ><Button className='btdaw' variant="outline-secondary">Home</Button>{' '}</Link>
        <Link to={'Register'}><Button className='btdaw' variant="outline-secondary">Register</Button>{' '} </Link>
       <Link to={'/login'}> <Button variant="outline-secondary" className='btdaw' >Login</Button>{' '}</Link>
        <Link to={'/Profil'}><Button variant="outline-secondary" className='btdaw' >Profil</Button>{' '}</Link>
        <Link to={'/Product'}><Button variant="outline-secondary" className='btdaw'>Product</Button>{' '}</Link>
        <Button variant="outline-secondary" className='btdaw'>Editproduct</Button>{' '}
        <Button variant="outline-secondary" className='btdaw'>EditProfil</Button>{' '}
        <Button variant="outline-secondary" className='btdaw'>UserList</Button>{' '}
        <Button variant="outline-secondary" className='btdaw'>ProductsList</Button>{' '}
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success btdaw " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

   
  )
}

export default NNavbar