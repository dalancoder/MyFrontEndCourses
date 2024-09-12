import React, { useContext, useState } from 'react'
import MyNavbar from '../components/MyNavbar'
import MyFooter from '../components/MyFooter'
import Courses from '../components/Courses'
import data from "../helper/data"
import Container from 'react-bootstrap/Container';
// import { registration } from '../helper/data';
import Swal from 'sweetalert2'
import { UserContext } from '../context/UserProvider'


const Home = () => {
  
    // const [register, setRegister]=useState(JSON.parse(localStorage.getItem("list"))||[]);
    // const [visible, setVisible] = useState(true)
    // const handleNotVisible =()=>{
    //   setVisible(false)
    
    // }
    // const handleVisible =()=>{
    //   setVisible(true)
    // }


    // const handleAddRegister =(newRegistration)=>{
    //     setRegister([...register, newRegistration])
    //     localStorage.setItem("list", JSON.stringify([...register, newRegistration]))
        
    // } 
   

  return (
    <div className='homeDiv'>
    
   
    <Container className='d-flex justify-content-center flex-wrap gap-3'>

        
     
          <Courses 
  />
      
 


    </Container>

    
    

    </div>
  )
}

export default Home