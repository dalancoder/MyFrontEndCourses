
import {Row} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa'; 
import img2 from "../images/registration1.png";
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';


const KayitFormu = () => {
  const {register, handleDelete}=useContext(UserContext)
 

    if(register.length === 0){
        return (<div className='regisDiv'>No registration yet!
        <img className='registration-img' src={img2} alt="" />
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
           <Row>
             <h3>{name} {lastname}</h3>
               
           </Row>
               
           
      
            <Row>
            <h4>Course: {course}</h4>
            <h6>Email: {email}</h6>
            </Row>
           
          <p className='fs-5'>Phone Number :{phone}</p><br />
          <Row >
    
             <FaTrash type='button' onClick={()=>handleDelete(id)}  className='text-danger delete fs-3 '/> 
          </Row>
         
        
           
            
        </Row>
        ))
    }
    
    </>
   
    
   
  )
}


export default KayitFormu