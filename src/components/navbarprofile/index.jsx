import React from 'react';
import logo from '@/asssets/img/LogoPelworld.png';
import mail from '@/asssets/img/mail.png';
import bell from '@/asssets/img/bell.png';
import profile from '@/asssets/img/Profilelogo.png';
import Image from "next/legacy/image";
import { Nav, Container, Navbar } from 'react-bootstrap';


const NavbarProfile = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href='#'>
      <Image src={logo} alt='logo' style={{position:"absolute", marginLeft:"50px"}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
        <Navbar.Collapse id="basic-navbar-nav" className='d-flex flex-row'>
          <Nav className="me-auto">
            <div className="bell" style={{ marginRight: "20px" }}>
              <a href="#">
              <Image src={bell} alt='bell'/>
              </a>
            </div>
           <div className="mail" style={{ marginRight: "20px" }}>
            <a href="#">
            <Image src={mail} alt='mail'/>
            </a>
           </div>
           <div className="profile" style={{ marginRight: "60px" }}>
            <a href="#">
            <Image src={profile} alt='profile'/>
            </a>
           </div>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </>
  );
};

export default NavbarProfile