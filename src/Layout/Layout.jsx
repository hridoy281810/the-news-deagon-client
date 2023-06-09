import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Payges/Sheard/Leftnav/LeftNav';
import RightNav from '../Payges/Sheard/RightNav/RightNav';
import Header from '../Payges/Sheard/Header/Header';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Payges/Sheard/NavigationBar/NavigationBar';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
             <Container>
    
      <Row>
        <Col lg={3}> <LeftNav></LeftNav> </Col>
        <Col lg={6}>
           <Outlet></Outlet></Col>
        <Col lg={3}> <RightNav></RightNav> </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Layout;