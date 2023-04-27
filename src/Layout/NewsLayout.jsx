import React from 'react';
import Hader from '../Payges/Sheard/Header/Hader';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightNav from '../Payges/Sheard/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <div>
   
             <Container>
    
      <Row>
        <Col lg={9}>
           <Outlet></Outlet></Col>
        <Col lg={3}> <RightNav></RightNav> </Col>
      </Row>
    </Container>
        </div>
    );
};

export default NewsLayout;