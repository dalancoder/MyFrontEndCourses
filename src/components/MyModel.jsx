import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import img2 from "../images/registration1.png"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Swal from 'sweetalert2'
import "react-intl-tel-input/dist/main.css";
// import PhoneForm from "./PhoneForm";


const MyModel = ({ handleAddRegister,  handleClose, show}) => {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

    
   
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse]=useState("")
  console.log(name, lastname, email);
 

  const handleSubmit = (e) => {
    console.log("submit oldu!");
    e.preventDefault();
    let newRegistration = {
      id: new Date().getTime(),
      name: name,
      lastname: lastname,
      email: email,
      course:course,
      phone:phone
    };
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Registration Successful!"
    });
    if(name==="" || lastname===""|| email==="" || course === ""|| phone===""){
      alert("Boş bıraktığınız alan yada alanları doldurunuz!")
      return (<div>No registration yet!
        <img src={img2} alt="" />
        </div>)
    }
    handleAddRegister(newRegistration);
    console.log(newRegistration);
  };
  return (
    <>
    
    <Modal show={show} onHide={handleClose}>
    <Container>
        <Modal.Header closeButton>
          <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Lastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              rows={6}
              placeholder="Lastname"
              required
            />
          </Form.Group>
         
                <p>Enter your phone number</p>
      <PhoneInput
      style={{margin:"15px"}}
        country={'tr'}  
        value={phone}
        onChange={handlePhoneChange}
      />
     
              {/* onChange={(e) => setLastname(e.target.value)}
              // type="text"
              // rows={6}
              // placeholder="Lastname"
            />
         */}
          <Form.Select onChange={(e) => setCourse(e.target.value)}
          aria-label="Default select example">
      <option>Please select a course</option>
      <option value="HTML-CSS">HTML-CSS</option>
      <option value="Bootstrap">Bootstrap</option>
      <option value="Javascript">Javascript</option>
      <option value="React">React</option>
    </Form.Select>
          {/* <Form.Group className="mb-3" controlId="Lastname">
            <Form.Label>Course</Form.Label>
            <Form.Control
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              type="text"
              rows={6}
              placeholder="course"
              
            />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="Phone Number">
            {/* <Form.Label>Phone Number:</Form.Label>
        <Form.Control type="Phone" placeholder="Enter Phone Number" /> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="Email"
              rows={6}
              placeholder="Enter Email"
            />
          </Form.Group> 
          <div className="d-flex justify-content-evenly mb-3 ">
            <Button className="btn-info text-white fw-bold"  type="submit" onSubmit={handleSubmit} >
            Submit
          </Button>
            <Button className="btn-danger fw-bold " type="button" onClick={handleClose} >
            Close
          </Button>
          </div>
          
        </Form>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        </Container>
      </Modal>
    
       
    </>
        
        
   
   
  );
};

export default MyModel;
