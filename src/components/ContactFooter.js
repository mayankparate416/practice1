import React from 'react';
import '../bg.css';
// import data from '../copywrite.json';
import insta from '../images/instagram1.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';

export default function ContactFooter() {
    const currentDate=new Date();
    const currentYear=currentDate.getFullYear();
  return (
    <>
        <div className="container-fluid pt-2">            
            <div className="container-fluid ">
                <div className="row justify-content-center">

                    <div className="col-md-4" >
                        <h4 className="pt-2 footerheading" >FTB InnoSphere</h4>
                        {/* <p> FTB InnoSphere, 1170/10, Revenue Colony, J M Road, Shivajinagar, Pune-411005, India</p> */}
                        <p className=" pt-1 footercontent">1170/10, Revenue Colony, 
                            <br />
                            J M Road, Shivajinagar,
                            <br />
                            Pune-411005, India.
                        </p>
                    </div>

                    <div className="col-md-4" >
                        <h4 className="pt-2 footerheading" > Contact us</h4>
                        <div className="contact-card-padding">
                            <h6 className=" pt-2 footercontent" >Email: info@ftbinnosphere.com </h6>                            
                        </div>
                    </div>

                    <div className="col-md-4" >
                        <h4 className="pt-2 footerheading" > Follow </h4>
                        <div className="justify-content-center footercontent" style={{display:'flex',gap:'10px', color:'blue'}}>                        
                            {/* <a href="/linkedin" className="nav-link">  </a>                             
                            <a href="/twitter" className="nav-link">  </a>                            
                            <a href="/insta" className="nav-link">  </a> */}
                            <img src={linkedin} width='25' alt='linkedin'/>
                            <img src={twitter} width='25' alt='twitter'/>
                            <img src={insta} width='25' alt='instagram'/>                 
                        </div>
                    </div>                    
                </div>
            </div>

            <hr className='contact-hr' />
            <div className='container justify-content-center footercontent' style={{display:'flex',gap:'25px'}}>
                <a href="/policy" className="nav-link justify-content-start "> Privacy Policy </a> 
                <b> ©{currentYear} FTB INNOSHPERE </b>
                <a href="/terms" className="nav-link justify-content-end"> Terms & Condition </a>

            </div>            
        </div>
    </>
  )
}
