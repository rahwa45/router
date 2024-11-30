import React from 'react'

const Footer = () => {
  return (
    <>
    <hr className='my-5 w-75 mx-auto'></hr>
    <div className='container d-flex justify-content-around w-100 m-5 p-5'> 
    
       
      <div className=''>
        <h2>Features</h2>
        <a href='#'>Cool stuff</a>
        <p className='text-decoration-underline'>Random features</p>
        <p className='text-decoration-underline'>Team features</p>
      </div>
      <div>
        <h2 >Resources</h2>
        <p className='text-decoration-underline'>Resource</p>
        <p className='text-decoration-underline'>Resource name</p>
        
      </div>
      <div>
        <h2>About</h2>
        <p className='text-decoration-underline'>Team</p>
        <p className='text-decoration-underline'>Locations</p>
        
      </div>

    
      
      </div>
      </>
  )
}

export default Footer