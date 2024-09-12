import React, { useContext } from 'react'
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';


import KayitFormu from './KayitFormu';
import { UserContext } from '../context/UserProvider';

const Registration = () => {
  const {register, handleDelete} =useContext(UserContext)
    
   
    console.log(register);

   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
  return (
    <>
    <Button variant="secondary" onClick={handleShow}>
      Registrations {register.length}
    </Button>

    <Offcanvas class="offcanvas "  show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
  
             <Offcanvas.Title></Offcanvas.Title>
     
       
      </Offcanvas.Header>
      <Offcanvas.Body>
      
      </Offcanvas.Body>
      <Offcanvas.Body>

     <KayitFormu />

      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}

export default Registration