import React from 'react'
import data_image from '../images/rnd.jpg';

function Research_dev() {
  
  return (
    <>
    <div className='image-container' >

      <img style={{width:'100%'}} src={data_image} alt='research' />
      <div className="letter-container">
        <h2 className=" ">Reserach And Development</h2>
      </div>
    </div>
    </>
  )
}

export default Research_dev;