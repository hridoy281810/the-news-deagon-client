import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Payges/Sheard/Leftnav/LeftNav';
import RightNav from '../Payges/Sheard/RightNav/RightNav';
import Hader from '../Payges/Sheard/Header/Hader';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Hader></Hader>
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