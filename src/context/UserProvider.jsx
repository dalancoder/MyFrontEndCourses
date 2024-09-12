import React, { createContext, useState } from 'react'
import data from "../helper/data"
import Swal from 'sweetalert2'

export const UserContext=createContext()

const UserProvider = ({children}) => {
    const [register, setRegister]=useState(JSON.parse(localStorage.getItem("list"))||[]);
    const [visible, setVisible] = useState(true)
    const handleNotVisible =()=>{
      setVisible(false)
    
    }
    const handleVisible =()=>{
      setVisible(true)
    }

    const handleAddRegister =(newRegistration)=>{
        setRegister([...register, newRegistration])
        localStorage.setItem("list", JSON.stringify([...register, newRegistration]))
        
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
            localStorage.setItem("list", JSON.stringify(filteredRegister));
          }
        });
    
            
        }
        

    
  return (
    <UserContext.Provider value={{register, data, visible, handleNotVisible, handleVisible, handleDelete, handleAddRegister}}>
        <div>{children}</div>
    </UserContext.Provider>
    
  )
}

export default UserProvider