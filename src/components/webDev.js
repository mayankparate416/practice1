import React from 'react'
import python from '../images/icons8-python-480.png';
import web_image from '../images/web_d1.jpg';
import java from '../images/java.jpeg';
import php from '../images/php.png';
import node from '../images/nodejs.jpeg';
import react from '../images/reactjs.png';

import '../css/bg.css';

export default function webDev() {
  return (
    <>
        <div style={{paddingBottom:'20px',width:'100%'}}>
            <img className='image-fluid' src={web_image} alt='web_develope' style={{width:'100%'}} />
        </div>
        <div className='container-fluid pt-3 bg-body-secondary' style={{paddingBottom:'30px'}}>
            <div className='row'>
                <div className='col-md-6 pt-4' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                    <h2 className='heading'> WEB DEVELOPMENT SERVICES </h2>
                </div>
                <div className='col-md-4 pt-3' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
                    <p className='webfont1' style={{textAlign:'justify'}}>  Web development facilitates the creation of websites and web applications that enable users to access and 
                        interact with information and services from anywhere at any time.</p>
                </div>
            </div>
        </div>  



        <div className='container-fluid pt-5' style={{paddingBottom:'50px'}}>
            <div className='container'>
            <h3 className='heading'> OUR WEB DEVELOPMENT SERVICES</h3>
            <div className='row pt-3'>
                <div className='col-md-4 card-container'>
                    <div className='card card1 border-0 shadow-lg' style={{paddingLeft:'30px', paddingRight:'30px', margin:'10px'}}>
                        <h5 className='pt-3 webfont' >Website Development </h5>
                        <p className='webfont1' style={{paddingLeft:'10px', paddingRight:'10px'}}>Includes creating, building, and maintaining of websites.</p>
                    </div>
                </div>
                <div className='col-md-4 card-container'>
                    <div className='card card1 border-0 shadow-lg' style={{paddingLeft:'30px', paddingRight:'30px',margin:'10px' }}>
                        <h5 className='pt-3 webfont'>E-commerce Development </h5>
                        <p className='webfont1' style={{paddingLeft:'10px', paddingRight:'10px'}}>Building and creating a platform where consumers can buy products.</p>
                    </div>
                </div>
                <div className='col-md-4 card-container'>
                    <div className='card card1 border-0 shadow-lg' style={{paddingLeft:'30px', paddingRight:'30px',margin:'10px'}}>
                        <h5 className='pt-3 webfont'>Website Management </h5>
                        <p className='webfont1' style={{paddingLeft:'10px', paddingRight:'10px'}}>Includes create, manage and publish content on websites.</p>
                    </div>
                </div>
                {/* <div className='col-md-3'>
                    <div className='card border-0 shadow-lg' style={{paddingLeft:'50px', paddingRight:'50px'}}>
                        <h5 className='pt-3'>Website Development </h5>
                        <p className='' style={{paddingLeft:'15px', paddingRight:'15px'}}>Includes creating, building, and maintaining of websites</p>
                    </div>
                </div> */}
            </div>
            </div>
        </div> 

        <div className='container-fluid'>
            <div className='container'>
                <h3 className='heading'> Web Development Technologies</h3>
                <div className='row'>
                    {/* <h4 className='text-start' style={{fontSize:'1.5vw'}}> Back-End Technologies</h4> */}
                    <div className='col-md-4 pt-3'>
                        <img src={python} className="c1" alt="Python" /> 
                        <p className='webfont'> Python</p>
                    </div>
                    <div className='col-md-4 pt-3'>
                        <img src={java} className="c1" alt="java" /> 
                        <p className='webfont'> Java</p>
                    </div>
                    <div className='col-md-4 pt-3'>
                        <img src={react} className="c1" alt="react" /> 
                        <p className='webfont'> React JS</p>
                    </div>
                    <div className='col-md-4 pt-3'>
                        <img src={node}  className="c1"  alt="node" /> 
                        <p className='webfont'> Node JS</p>
                    </div>
                    <div className='col-md-4 pt-3'>
                        <img src={php} className="c1" alt="php" /> 
                        <p className='webfont'> PHP</p>
                    </div>
                    
                </div>
            

                
            </div>
        </div>   
    </>
  )
}
