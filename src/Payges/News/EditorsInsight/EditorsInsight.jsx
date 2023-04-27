import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import EImg1 from '../../../assets/1.png';
import EImg2 from '../../../assets/2.png';
import EImg3 from '../../../assets/3.png';
import { HiCalendar } from "react-icons/hi2";

const EditorsInsight = () => {
    return (
        <div className='mt-4'>
            <h4 className='mb-3'>Editors Insight</h4>
            <div>
            <Row xs={1} md={2} lg={3} className="g-4">
     
        <Col >
          <Card>
            <Card.Img variant="top" src={EImg1} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <HiCalendar className='me-1'></HiCalendar> <small>Jan 4, 2022</small>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={EImg2} />
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <HiCalendar className='me-1'></HiCalendar> <small>Jan 4, 2022</small>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={EImg3} />

            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <HiCalendar className='me-1'></HiCalendar> <small>Jan 4, 2022</small>
            </Card.Body>
          </Card>
        </Col>
    </Row>
            </div>
        </div>
    );
};

export default EditorsInsight;