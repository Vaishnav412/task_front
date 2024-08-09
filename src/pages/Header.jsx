import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';


function Header() {

      const navigate=useNavigate()

  const handleClick=()=>{
    localStorage.clear()
    console.clear()
    navigate('/')
  }

  const userId=localStorage.getItem("user")
    
  return (
    <>
     <Navbar expand="lg" className="bg-dark fixed-top">
      <div  className='container'>
          
            <Navbar.Brand className='fw-bolder text-white'  href="#home">TASK MANAGEMENT APPLICATION</Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
            <div >
                <Navbar.Collapse  id="basic-navbar-nav">
                  <Nav  className="me-auto " >
                    <Link to={`/${userId}`} className='text-decoration-none fw-bolder text-white me-3 pt-2' >HOME</Link>
                    <Link to={`/${userId}/alltask`} className='text-decoration-none fw-bolder text-white me-3 pt-2' >ALL TASK</Link>
                    <Button className='fw-bolder' variant='info' onClick={handleClick}>LOGOUT</Button>

                   
                  </Nav>
                </Navbar.Collapse>
            </div>
      </div>
    
    </Navbar>
    
    
    </>
  )
}

export default Header