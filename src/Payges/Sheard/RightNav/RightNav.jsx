import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import QZoon from '../QZoon/QZoon';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
      <Button variant="outline-primary mb-3"><FaGoogle></FaGoogle> Login With Google</Button>
      <Button variant="outline-secondary mb-3"> <FaGithub></FaGithub> Login With gitHub</Button> 
       <div>
        <h4 className='mt-4'>Find Us On</h4>
        <ListGroup>
      <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter></FaTwitter> Twitter </ListGroup.Item>
      <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>

    </ListGroup>
       </div>
       <QZoon></QZoon>
       <div>
        <img src={bg} alt="" />
       </div>
       
        </div>
    );
};

export default RightNav;