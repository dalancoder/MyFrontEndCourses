import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import img1 from "../images/avatar.PNG";
import Registration from "./Registration";

const MyNavbar = ({ register, handleDelete }) => {
  console.log(register);
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
        
    

      <Registration register={register} handleDelete={handleDelete} />
     
        <Nav.Link className="nav-item" href="#home">
          Home
        </Nav.Link>
        <Nav.Link className="nav-item" href="#link">
          My Projects
        </Nav.Link>

        <NavDropdown
          className="nav-item custom-dropdown"
          title="My Courses"
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
