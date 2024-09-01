import React, { useState } from 'react'
import {Row,Col} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa'; 
import img2 from "../images/registration1.png"

const KayitFormu = ({register,handleDelete}) => {

    if(register.length === 0){
        return (<div>No registration yet!
        <img src={img2} alt="" />
        </div>)
    }
    // if (!register) {
    //     return <div>Loading...</div>;  
    // }
   
    
  return (
    <>
         {
        register.map(({id, name, email, lastname, course, phone})=>(
            <Row key={id}  className= "d-flex justify-content-between text-center border-2 bg-info mb-3 list">
            <Col>
                <h3>{name}</h3>
                <h4>{lastname}</h4>
            </Col>
            <Col >
                {/* <h5 className={`consulted ${consulted? "": "d-none"}`}>CONSULTED</h5> */}
            </Col>
            <Col>
            <h4>{course}</h4>
            <h6>{email}</h6>
            </Col>
            <Col className='d-flex align-items-center justify-content-center fs-3'>
          <p>{phone}</p>
          <FaTrash type='button' onClick={()=>handleDelete(id)}  className='text-danger delete'/> 
        
            </Col>
            
        </Row>
        ))
    }
    </>
   
    
   
  )
}

export default KayitFormu