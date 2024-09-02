import React, { useState } from 'react'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'
import Courses from '../components/Courses'
import data from "../helper/data"
import Container from 'react-bootstrap/Container';
import { registration } from '../helper/data';
import Swal from 'sweetalert2'
import { faBullseye } from '@fortawesome/free-solid-svg-icons/faBullseye'

const Home = () => {
    const [register, setRegister]=useState(registration);
    const [visible, setVisible] = useState(true)
    const handleNotVisible =()=>{
      setVisible(false)
    
    }
    const handleVisible =()=>{
      setVisible(true)
    }


    const handleAddRegister =(newRegistration)=>{
        setRegister([...register, newRegistration])
        console.log("New Registration Added: ", newRegistration);  
        console.log("Updated Register List: ", register); 
    } 
   
    const handleDelete = (id)=>{
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        const filteredRegister = register.filter((item)=>item.id !== id)
        setRegister(filteredRegister)
      }
    });

        
    }
    
  return (
    <div className='homeDiv'>
    <MyNavbar  register={register} handleDelete={handleDelete} handleNotVisible={handleNotVisible} 
      handleVisible={handleVisible}
    />
   
    <Container className='d-flex justify-content-center flex-wrap gap-3'>

        
     
          <Courses visible={visible} data ={data} handleAddRegister={handleAddRegister}
    
  />
      
 


    </Container>

    
    
    <MyFooter/>
    </div>
  )
}

export default Home