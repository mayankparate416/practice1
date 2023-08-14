import React from 'react';
import '../css/bg.css';
import career from '../images/career_image.jpg';
import Fresher from '../images/fresher.jpg';
import professional from '../images/professional.jpg';
import leader from '../images/leader.jpg';
const hStyle = { color: 'darkslategray', };
const card_height={height:'auto'};


export default function Career() {
   
  return (
    <>  
    <div className="image-fluid" style={{ width:'100%'}}>
        <img src={career} className='image-fluid' style={{width:'100%', height:'auto', maxWidth:'100%'}} alt="landing" />     
   </div>   

    <div className="bg-body-secondary pt-5" style={{paddingLeft:'20px', paddingRight:'20px',paddingBottom:'30px'}}> 
        <h4 className=" text-center heading" style={{color: 'darkslategray'}}>COME & JOIN US</h4>
       <p className='webfont1 pt-3' style={hStyle} >
        We’re looking for software engineers who want to invent, build, and sometimes break things to make them easier, faster, better,
            and more cost-effective. 
        </p>
        <p className='webfont1' style={hStyle}>
            To those who thrive at solving highly complex problems, and who aspire to impact billions of lives on a global scale: come build the future with us.
        </p>
        <p className='webfont1' style={hStyle}>
            Come and collaborate with our client to provide <strong>Software Development </strong>Services.
        </p>
    </div>

  <div className="container-fluid pt-5">
    <h2 className=" text-center heading" style={hStyle}> We are here to make a difference</h2>
  </div>

    <div className="container-fluid pt-1" style={{paddingBottom:'60px'}}>
        <div className="row pt-1" style={{width:'100%',paddingLeft:'25px'}}>

            <div className="col-md-4 pt-4 card-container" style={{margin:0}}>                
                <div className="card border border-0 shadow-lg card2 " style={card_height} >
                    <img  src={Fresher} className="card-img-top" alt="fresher" />
                    <div className="card-body">
                        <div className="card-title"> <h5 className="text-center webfont">Graduates/Interns </h5> </div>
                      <p className="card-text pt-1 webfont1" style={{textAlign:'justify'}}>Start your fresh and early career with us. We have a great workplace for your career.
                      We have different domains to work with us. Start your career as an <strong> intern </strong> to learn and explore our domains and Services.</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 pt-4 card-container" style={{margin:0}}>
                <div className="card border border-0 shadow-lg card2" style={card_height}>
                    <img src={professional}  className="card-img-top" alt="professional" />
                    <div className="card-body">
                        <div className="card-title"> <h5 className="text-center webfont">Professionals/Experienced</h5> </div>
                      <p className="card-text pt-1 webfont1" style={{textAlign:'justify'}}>Bring your <strong> professional experience </strong> at our workplace. Let your expertise moves to next level to innovate with the clients.
                      We will provide you opportunities to take meaningful steps for your future. </p>
                    </div>
                </div>
              
            </div>

            <div className="col-md-4 pt-4 card-container" style={{margin:0}}>
                <div className="card border border-0 shadow-lg card2" style={card_height} >
                    <img src={leader} className="card-img-top" alt="leader" />
                    <div className="card-body">
                        <div className="card-title"> <h5 className="text-center webfont">Leaders/Executives</h5> </div>
                      <p className="card-text pt-1 webfont1" style={{textAlign:'justify'}}>You are the <strong>leader/expert</strong> we’re looking for, if you have great experience and you are passionate about professional development and know how to build a spirit of innovation into a team’s DNA.
                         </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <div className="bg-light" >
        <div className="container-fluid">
            <div className="row pt-4" style={{width:'100%'}}>  
                <h3 className='text-center heading' style={hStyle}> Share Your Resume</h3>
                <div className="pt-3" style={{width:'100%'}}>
                    <iframe title="resume" style={{height:'95vh',width:'100%'}} src='https://forms.zohopublic.in/ftbinnosphere/form/ApplyOnline/formperma/lvdOC7dcLMm1xeJeZmmNPdb7-RLMHLb-5lAp7WNjnd0'></iframe>

                </div>
            </div>
        </div>
	</div>  
    

    </>
  )
}
