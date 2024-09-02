import React from 'react'
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';


import KayitFormu from './KayitFormu';

const Registration = ({register,handleDelete}) => {
    
   
    

   
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

     <KayitFormu register={register} handleDelete={handleDelete}/>

      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}

export default Registration