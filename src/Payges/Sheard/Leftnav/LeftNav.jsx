import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sports from './Sports';

const LeftNav = () => {
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch(`https://the-news-deagon-server-hridoy281810.vercel.app/categories`)
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            <h4>All Category</h4>
           <div className='ps-4 '>
           {
                categories.map(category => <p 
                key={category.id}
                >
                    <Link to={`/category/${category.id}`}   className='text-decoration-none text-black'>{category.name}</Link>
                </p>)
            }
           </div>
           <Sports></Sports>
        </div>
    );
};

export default LeftNav;