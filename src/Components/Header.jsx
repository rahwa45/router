import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom'
import React from 'react'

const Header = () => {

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-end'>
      <h4>Company Name</h4>
     <div className='ms-auto p-2'><NavLink to='/features'>Features</NavLink></div>
     <div className='p-2'><NavLink to='/enterprise'>Enterprise</NavLink></div>
     
     <div className='p-2'><NavLink to='/support'>Support</NavLink></div>
     <div className='p-2'><NavLink to='/'>Home</NavLink>
     </div>
     </div>
    
     
     <hr className='text-primary border-2 p-3'></hr>
    </div>
   
  )
}

export default Header