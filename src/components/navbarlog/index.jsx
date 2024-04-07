import React from 'react';
import logo from '@/asssets/img/LogoPelworld.png';
import Image from "next/legacy/image";
import { Container, Nav, Navbar } from "react-bootstrap";


const NavbarLog = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Image src={logo} alt='logo' style={{position:"absolute"}}/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="me-auto">
              <Nav.Link href="/auth/login">
                <button type="button" className="btn ml-4" style={{ border: "1px solid #5E50A1", color: "#5E50A1", padding: "10px 20px", cursor: "pointer", marginLeft: "800px" }}>
                  Masuk
                </button>
              </Nav.Link>
              <Nav.Link href="/auth/register/registerworker">
                <button type="button" className="btn ml-1" style={{ backgroundColor: "#5E50A1", padding: "10px 20px", cursor: "pointer", color: "white", marginLeft: "16px" }}>
                  Daftar
                </button>
              </Nav.Link>
            </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarLog
