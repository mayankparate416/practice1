import React from 'react';
import '../css/bg.css';
import data_a from '../images/analytics.jpg';
import research from '../images/cloud2.jpg';
import web from '../images/web_d.jpg';
import image from '../images/service.jpg';
import issue from '../images/issue_reso.jpg';
import assistance from '../images/implementation.jpg';
import doc from '../images/doc_create.jpg';
import report from '../images/report_gen.jpg';
import git from '../images/git.png';
import planning from '../images/planning.png';
import confluence from '../images/confluence.png';
import scrum from '../images/scrum.png';
import jira from '../images/jira.png';
import slack from '../images/slack.png';

const width={height:'auto'};
const hStyle = { color: 'darkslategray' };
export default function Services() {

  return (
    <div className='bg-light'>
      
      <div className="image-fluid" style={{width:'100%'}}>
        <img src={image} className='image-fluid' style={{width:'100%', height:'auto', maxWidth:'100%'}} alt="landing" />     
      </div>
    <div style={{backgroundColor:'Gainsboro', padding:'20px'}}>
      <h1 className="heading" style={hStyle}> SERVICES</h1>
      <div className='container pt-2'>
        <p className='webfont' style={{textAlign:'justify'}}>
          We are a premier provider of IT services dedicated to assisting our international clients in resolving issues, implementing solutions, creating comprehensive documentation, and developing new reports based on their existing system features. We specialize in leveraging our expertise to help businesses optimize their operations and overcome technical challenges.
        </p>
      </div>  
    </div>

    


    <div className='container-fluid pt-5' style={{paddingBottom:'50px'}}>
      <h2 className='text-center heading ' style={{ color:'darkslategray'}}> Build yourself in Latest Technology </h2>
      
      <div className="row pt-3" style={{width:'100%', paddingLeft:'25px'}}>
        
        <div className="col-md-4 pt-3 card-container" style={{margin:0}}>
          <div className='card border border-0 shadow-lg card3' style={width} >
            <a href="/dataAnalytics" ><img src={data_a}  className="card-img-top" alt="..." /></a>
            <h4 className='text-center webfont pt-2' style={hStyle}> Data Analytics </h4>
          </div>
        </div>

        <div className="col-md-4  pt-3 card-container" style={{margin:0}}>
          <div className='card border border-0 shadow-lg card3' style={width}>
          <a href="/cloud" ><img src={research} className="card-img-top" alt="..." /> </a>
            <h4 className='text-center webfont pt-2' style={hStyle}> Cloud Computing </h4>
          </div>
        </div>
        
        <div className="col-md-4 pt-3 card-container" style={{margin:0}}>
          <div className='card border border-0 shadow-lg card3' style={width}>
          <a href="/web" ><img src={web}  className="card-img-top" alt="..." /> </a>
            
            <h4 className='text-center webfont pt-2' style={hStyle}> Web Development </h4>
          </div>
        </div>
      </div>
    </div>
    
    <div className='container-fluid pt-4 bg-light' style={{paddingBottom:'50px'}}>
      <h3 className='text-center heading pt-3' style={hStyle}>Our Comprehensive Range of Services </h3>
      <p className='webfont pt-4 container'> We offer a comprehensive range of IT services that leverage our proficiency in cutting-edge technologies. Our team of experts is skilled in utilizing various tools and platforms to deliver exceptional solutions tailored to your specific needs. </p>
      <div className="row pt-1" style={{width:'100%',paddingLeft:'25px'}}>
        
        <div className="col-md-3 pt-4 card-container" style={{margin:0}}>                
          <div className="card shadow-lg card5 " style={{height:'auto'}}>
            <img src={issue} className="card-img-top" alt='issue' />
            <div className="card-body">
              <div className="card-title"> <h5 className="text-center heading1">Issue Resolution </h5> </div>
              <p className='card-text  pt-1 webfont1' style={{textAlign:'justify'}}>
                We have a proven track record of effectively identifying and resolving technical issues that can hinder the smooth operation of your IT systems. Our team possesses extensive experience in troubleshooting and debugging, ensuring a swift and accurate resolution to minimize any disruptions to your business.
              </p>
            </div> 
          </div> 
        </div>

        <div className="col-md-3 pt-4 card-container" style={{margin:0}}>                
          <div className="card  shadow-lg card5 " style={{height:'auto'}}>
            <img src={assistance} className="card-img-top" alt='assistance' />
            <div className="card-body">
              <div className="card-title"> <h5 className="text-center heading1"> Implementation Assistance </h5> </div>
              <p className='card-text  pt-1 webfont1' style={{textAlign:'justify'}}>
                When it comes to implementing new systems or upgrading existing ones, our team is here to guide you every step of the way. We work closely with your organization to develop implementation strategies, provide technical expertise, and offer valuable insights to ensure a successful implementation process.
              </p>
            </div> 
          </div> 
        </div>

        <div className="col-md-3 pt-4 card-container" style={{margin:0}}>                
          <div className="card  shadow-lg card5 " style={{height:'auto'}}>
            <img src={doc} className="card-img-top" alt='documentation' />
            <div className="card-body">
              <div className="card-title"> <h5 className="text-center heading1"> Documentation Creation </h5> </div>
              <p className='card-text  pt-1 webfont1' style={{textAlign:'justify'}}>
                We understand the importance of comprehensive documentation to facilitate system maintenance and knowledge transfer. Our experts specialize in creating detailed and user-friendly documentation tailored to your systems, ensuring that your team can effectively manage and support them.
              </p>
            </div> 
          </div> 
        </div>

        <div className="col-md-3 pt-4 card-container" style={{margin:0}}>                
          <div className="card  shadow-lg card5 " style={{height:'auto'}}>
            <img src={report} className="card-img-top" alt='report' />
            <div className="card-body">
              <div className="card-title"> <h5 className="text-center heading1"> Report Development </h5> </div>
              <p className='card-text pt-1 webfont1' style={{textAlign:'justify'}}>
                We offer custom report development services to enhance the reporting capabilities of your existing system. Our team collaborates closely with your organization to understand your reporting requirements, design effective reporting solutions, and create visually appealing and insightful reports that empower data-driven decision-making.              
              </p>
             </div> 
          </div> 
        </div>
      </div>
    </div>

    <div className='container-fluid pt-5 bg-secondary-subtle'style={{padding:'30px'}}>
      <h2 className='heading' style={hStyle}> Our Collaborative Tools </h2>

      <div className='row pt-4 pt-4' >
        <div className='col-md-4' style={{padding:'30px'}}>
          <img src={git} width='70vh' alt='git'/>
            <h6 className='heading1 pt-4'>Git & GitHub</h6>
            <p className='webfont1  pt-2' style={{textAlign:'justify'}}>
              We utilize Git and GitHub for version control and collaborative software development, enabling multiple team members to work simultaneously on projects, track changes, and manage code repositories effectively.
            </p>
          
        </div>
        <div className='col-md-4' style={{padding:'30px'}}>
        <img src={jira} width='70' alt='jira'/>
            <h6 className='heading1 pt-4'> Jira </h6>
            <p className='webfont1  pt-2' style={{textAlign:'justify'}}>
              Jira is a powerful project management tool that helps us plan, track, and manage tasks and workflows. Jira also offers fantastic bug-tracking tools and helps teams to practice problem-solving and risk management efficiently.
            </p>          
        </div>
        <div className='col-md-4' style={{padding:'30px'}}>
        <img src={confluence} width='70' alt='confluence'/>
            <h6 className='heading1 pt-4'>Confluence</h6>
            <p className='webfont1  pt-2' style={{textAlign:'justify'}}>
            Confluence, on the other hand, serves as a collaborative wiki platform for creating and sharing project documentation, fostering knowledge sharing and transparency.
            </p>          
        </div>
        
      </div>
      <div className='row ' style={{paddingBottom:'20px'}}>
        <div className='col-md-4' style={{padding:'30px'}}>
        <img src={planning} width='70' alt='planning'/>
            <h6 className='heading1 pt-4'> Planning/Review</h6>
            <p className='webfont1  pt-2' style={{textAlign:'justify'}}>
              We utilize various project planning and review tools to ensure effective project organization, resource allocation, and progress tracking. These tools enable us to plan and monitor project milestones, tasks, and timelines accurately.
            </p>
        </div>
        <div className='col-md-4' style={{padding:'30px'}}>
        <img src={slack} width='70' alt='slack'/>
            <h6 className='heading1 pt-4'>Slack</h6>
            <p className='webfont1 pt-2' style={{textAlign:'justify'}}>
              We leverage Slack, a popular team communication platform, to foster real-time collaboration, quick communication, and seamless information sharing among team members and clients.
            </p>
        </div>
        <div className='col-md-4' style={{padding:'30px'}}>
        <img src={scrum} width='70' alt='scrum'/>
            <h6 className='heading1 pt-4'>Scrum and Agile</h6>
            <p className='webfont1  pt-2' style={{textAlign:'justify'}}>
              We follow Scrum and Agile methodologies to ensure iterative and flexible project management. These approaches promote collaboration, frequent communication, and adaptability to deliver high-quality results efficiently.
            </p>          
        </div>
      </div>
      
    </div>
   
    <div className='container-fluid pt-5' style={{padding:'30px'}}>
      <div style={{color:'rgb(78, 2, 36)'}} className='text-center heading'> 
          <div> "TALENT </div> <div> WINS THE GAMES, BUT </div> 
          <div> TEAMWORK AND INTELLIGENCE </div> WINS THE CHAMPIONSHIP."
          
      </div>
    </div>
      
    </div>
    
  )
}