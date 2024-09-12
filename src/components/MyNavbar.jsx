import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img1 from "../images/avatar.PNG";
import Registration from "./Registration";
import { NavLink, useNavigate } from "react-router-dom";


const MyNavbar = () => {
  
  const navigate=useNavigate()
  
 

  return (
    <Navbar expand="lg" className="bg-body-tertiary navDiv">
      {/* <Container className='navDiv '> */}
    <div className="navDiv-left">
       <Navbar.Brand href="#home">
          {" "}
          <img className="avatar" src={img1} width={100} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <h1>My FrontEnd Courses</h1>
    </div>
    <div className="navDiv-left">

        <Navbar.Collapse >
        <Nav >
        
    

      <Registration  />
     
        <NavLink to="/" className="nav-item" href="#home">
          Home
        </NavLink>
        <NavLink to="/projects" className="nav-item project-btn" href="#link">
          My Projects
        </NavLink>

        <NavDropdown
          onClick={()=>navigate("/interview")}
          className="nav-item fs-6 custom-dropdown"
          title="Interview Questions"
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="#action/3.1">Html - Css</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Bootstrap</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Javascript</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">React</NavDropdown.Item>
        </NavDropdown>
    

      </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
      </div>
    </Navbar>
  );
};

export default MyNavbar;
