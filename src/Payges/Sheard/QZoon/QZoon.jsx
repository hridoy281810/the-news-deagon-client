import React from 'react';
import qzoon1 from '../../../assets/qZone1.png'
import qzoon2 from '../../../assets/qZone2.png'
import qzoon3 from '../../../assets/qZone3.png'
const QZoon = () => {
    return (
        <div className='bg-secondary text-center py-4 my-4'>
           <h4>Q Zoon</h4> 
           <div>
            <img src={qzoon1} alt="" />
            <img src={qzoon2} alt="" />
            <img src={qzoon3} alt="" />
           </div>
        </div>
    );
};

export default QZoon;