import { useEffect, useState } from "react";

import './navigition.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { HiBars3 } from "react-icons/hi2";
import logo from '../assets/logo.png'

export default function Navigiation() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`nav fixed-top ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" loading='lazy' className='logo' />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <HiBars3 className='bars'/>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">about us</Nav.Link>
            <Nav.Link href="#explore">explore food</Nav.Link>
            <Nav.Link href="#testimonial">reviews</Nav.Link>
            <Nav.Link href="#faq">FAQ'S</Nav.Link>
          </Nav>

          <Nav.Link href="#contact" id='phone-number'>
            66989078
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}