import React from 'react';
import { Link } from 'react-router-dom';

const Trams = () => {
    return (
        <div>
            <h2>Trams and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolore quaerat dolores, doloremque ipsum iusto reiciendis voluptatum fugiat, error rem nisi optio earum quam ad asperiores libero magnam ratione nam.</p>
            <p>GO BACK TO <Link to="/register"> Register</Link> </p>
        </div>
    );
};

export default Trams;