import React from 'react';
import Logo from '../images/innosphere_hires.png';
const ul ={liststyle:'none', margin:0, padding:0};
const li={display : 'inline-block', margin:"1vh"}
export default function NavigationBar() {
  
  

  return (
    <>
    <div className="navbar navbar-expand-md bg-light " >
      <div className="container-fluid pt-4">
        <a className="navbar-brand" href="/landing"> 
            <img className="img-fluid" width="250vh" src={Logo} alt="landingimage" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" data-bs-dismiss="collapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" style={{paddingRight:'3rem'}}  id="navbarNavDropdown">
          <ul className="nav nav-underline" style={ul}>
          <li className="nav-item" style={li}>
            <a className="nav-link "  href="/landing">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">Blog</a>
          </li> */}
          <li className="nav-item"style={li}>
            <a className="nav-link" href="/service">Services</a>
            
          </li>
          <li className="nav-item" style={li}>
            <a className="nav-link" href="/career">Career</a>
          </li>
          <li className="nav-item"style={li}>
            <a className="nav-link" href="/contact">Contact us</a>
          </li>
          
          </ul>
          
        </div>
      </div>
    </div>
    
    
    </>
  )
}
