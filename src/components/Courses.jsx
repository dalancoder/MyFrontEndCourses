import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import MyModel from './MyModel';

const Courses = ({data, handleAddRegister}) => {
    const [title, setTitle]=useState("");


    console.log(title)
    // const {id, title, image, description } =data
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (title) =>{
        setShow(true);
        setTitle(title)
       
    } 
 console.log(title);
  return (
    <>
         {

        data.map(({id, title, image, description})=>(
             <Card className='cardDiv' key={id} style={{ width: '18rem'}}>
    <Card.Img variant="top" style={{height:"18rem"}} src={image} />
    <Card.Body className='d-flex flex-column justify-content-between align-items-center'>
      <Card.Title className='title'>{title}</Card.Title>
    
      <Card.Text>
        {description}
      </Card.Text>
      <Button onClick={()=>handleShow(title)}
      className="btn-close-white btn-success text-white fs-6 w-50" variant="primary">
      Registration</Button>
    </Card.Body>
  </Card>
        ))
    }
    
   
    
           

  <MyModel
     
 
     handleAddRegister={handleAddRegister}
     handleShow={handleShow}
     handleClose={handleClose}
     show={show}
     data={data}
     
  />
    </>

  )
}

export default Courses