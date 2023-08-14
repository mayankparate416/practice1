import React from 'react';
import '../css/bg.css';
import image from '../images/contact.jpg';

export default function Contact() {
  return (
    <>
    <div className="image-container" >
        <img src={image} alt='conatct' style={{width:'100%'}}/>
        <div className='text-overlay'>
            <h3 className='text-center' style={{fontSize:'2vw'}}>Connect with us... </h3>
            <h5 className='text-center' style={{fontSize:'2vw'}}> We are here to help you out </h5>
            <h5 className='text-center' style={{fontSize:'2vw'}}> Fill the 'Contact Us' and submit your queries </h5>
        </div>
    </div>

        {/* <div className='row bg-light' style={{ padding:'20px',display:'flex', justifyContent:'center',alignItems:'center'}}>
            <div className='col-md-6 '>
                <h3 className='text-center' style={{fontSize:'2vw',color: 'darkslategray'}}>Connect with us... </h3>
                <h5 className='text-center' style={{fontSize:'2vw',color: 'darkslategray'}}> We are here to help you out </h5>
                <h5 className='text-center' style={{fontSize:'2vw',color: 'darkslategray'}}> Fill the 'Contact Us' and submit your queries </h5>

            </div>
            <div className='col-md-6 pt-2' >
                <img src={image} style={{width:'100%'}} alt='' />
            </div>
        </div> */}

        <div className='pt-1'>
            <iframe  frameBorder="0" style={{height:'95vh',width:"100%",border:'none',display:'-ms-grid'}} title='contact' src='https://forms.zohopublic.in/simca/form/ContactUs/formperma/3A9vfh0qlXFEQ-ogA6s423McPXuTUjU-5pvXmgE7BEs'></iframe>
            {/* <iframe  frameborder="0" style={{height:'95vh',width:"100%",border:'none',display:'-ms-grid'}} title='contact' src='https://forms.zohopublic.in/ftbinnosphere/form/ContactUs/formperma/6_9imHTg9MaGtQ5a1HkEsBpszPn7kELRhjX8eYlszCk'></iframe> */}
        </div>                   
    </>
  )
}
