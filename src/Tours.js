import React from 'react';
import Tour from './Tour';
const Tours = ({tours,deleteTours, fetchTours}) => {

  
  return <section>
    <div className="title">
      <h2>{tours.length===0?`0 tours`:`our tours`}</h2>

      <div className="underline"></div>
      {tours.length===0?<button className='btn' onClick={()=> fetchTours()} >fetch tours</button>: null}
    </div>
    <div>
      {tours.map((tour) =>{
        return <Tour notInterested={deleteTours} key={tour.id} {...tour} ></Tour>
      }) }
    </div>
  </section>;
};

export default Tours;
