import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import EImg1 from '../../../assets/1.png';
import EImg2 from '../../../assets/2.png';
import EImg3 from '../../../assets/3.png';
import { HiCalendar } from 'react-icons/hi2';
const Sports = () => {
    return (
        <div className='mt-4'>
        <div>
        <Row xs={1} md={1} lg={1} className="g-4">
 
    <Col >
      <Card>
        <Card.Img variant="top" src={EImg1} />
        <Card.Body>
          <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
          <HiCalendar className='me-1'></HiCalendar> <small>Jan 4, 2022</small>
        </Card.Body>
      </Card>
    </Col>
    <Col >
      <Card>
        <Card.Img variant="top" src={EImg2} />
        <Card.Body>
          <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
          <HiCalendar className='me-1'></HiCalendar> <small>Jan 4, 2022</small>
        </Card.Body>
      </Card>
    </Col>
    <Col >
      <Card>
        <Card.Img variant="top" src={EImg3} />
        <Card.Body>
          <Card.Title>Bayern Slams Authorities Over Flight Delay to Club World Cup</Card.Title>
          <HiCalendar className='me-1'></HiCalendar> <small>Jan 4, 2022</small>
        </Card.Body>
      </Card>
    </Col>
</Row>
        </div>
    </div>
    );
};

export default Sports;