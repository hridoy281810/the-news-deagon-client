import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Hader = () => {
    return (
       <Container className='mt-4'>
 <div className='text-center'>
            <img src={logo} alt="" />
            <p className='text-secondary'> <small>Journalism Without Fear or Favour</small> </p>
         <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className='d-flex'>
        <Button variant="danger">Danger</Button>{' '}
       <Marquee className='text-danger' speed={50}>
        <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as........         
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            
        </p>
       </Marquee>
        </div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
         
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

       </Container>

    );
};

export default Hader;