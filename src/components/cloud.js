import React from 'react';
import cloud from '../images/cloud1.jpg';
import migration from '../images/migration.png';
import infra from '../images/infrastructure.png';
import security from '../images/security.png';
import hybrid from '../images/hybrid.png';
import severless from '../images/severless.png';
import backup from '../images/backup.png';
const hStyle = { color: 'darkslategray' };
export default function Cloud() {
  return (
    <>
    <div className='image-fluid ' >
        <img style={{width:'100%'}} src={cloud} alt='research' />
    </div>
    <div className='container-fluid pt-3'>
        <h2 className=" heading pt-3" style={hStyle}>Cloud Computing</h2>
        <p className='webfont pt-3' style={{textAlign:'justify', padding:'30px'}}>
        Cloud computing is a technology that enables users to access and utilize computing resources over the internet. Instead of relying on local servers or personal computers, cloud computing allows users to store, process, and manage data and applications on remote servers provided by cloud service providers.
        </p>
    </div>

    <div className='container-fluid pt-5 'style={{padding:'30px'}}>
        <h2 className='heading' style={hStyle}> Our Cloud Offerings </h2>

        <div className='row pt-4 pt-4' >
            <div className='col-md-4' style={{padding:'30px'}}>
            <img src={migration} style={{width:'3.5rem', maxWidth:'100%'}} alt='migration'/>
                <h6 className='heading1 pt-4'>Cloud Migration</h6>
                <p className='webfont1  pt-2' style={{textAlign:'justify'}}>
                Seamlessly migrate your applications and data to leading cloud platforms like AWS, Microsoft Azure, or Google Cloud for enhanced scalability and efficiency.
                </p>
            
            </div>
            <div className='col-md-4' style={{padding:'30px'}}>
            <img src={infra} style={{width:'3.5rem', maxWidth:'100%'}} alt='management'/>
                <h6 className='heading1 pt-4'> Cloud Infrastructure Management </h6>
                <p className='webfont1 pt-2' style={{textAlign:'justify'}}>
                Our experts ensure your cloud environment operates at peak performance through proactive monitoring and cost optimization.
                </p>          
            </div>
            <div className='col-md-4' style={{padding:'30px'}}>
            <img src={security} style={{width:'3.5rem', maxWidth:'100%'}} alt='security'/>
                <h6 className='heading1 pt-4'>Cloud Security Solutions</h6>
                <p className='webfont1  pt-2' style={{textAlign:'justify'}}>
                Protect your data and applications with robust security measures and best practices.
                </p>          
            </div>                    
        </div>

        <div className='row ' style={{paddingBottom:'20px'}}>
            <div className='col-md-4' style={{padding:'30px'}}>
            <img src={hybrid} style={{width:'3.5rem', maxWidth:'100%'}} alt='hybrid'/>
                <h6 className='heading1 pt-4'> Hybrid Cloud Solutions </h6>
                <p className='webfont1  pt-2' style={{textAlign:'justify'}}>
                Integrate your on-premises infrastructure with cloud services for flexibility and scalability.
                </p>
            </div>
            <div className='col-md-4' style={{padding:'30px'}}>
            <img src={severless}  style={{width:'3.5rem', maxWidth:'100%'}} alt='serverless'/>
                <h6 className='heading1 pt-4'>Serverless Architecture</h6>
                <p className='webfont1  pt-2' style={{textAlign:'justify'}}>
                Optimize costs and agility by developing applications without server management.
                </p>
            </div>
            <div className='col-md-4' style={{padding:'30px'}}>
            <img src={backup} style={{width:'3.5rem', maxWidth:'100%'}} alt='backup'/>
                <h6 className='heading1 pt-4'> Cloud Backup and Disaster Recovery </h6>
                <p className='webfont1 pt-2' style={{textAlign:'justify'}}>
                Safeguard your critical data and ensure business continuity.
                </p>          
            </div>
        </div>

        <h3 className='text-start pt-3 heading' style={{display:'flex', justifyContent:'center',alignItems:'center'}}> AWS Services</h3>
        <h6 className='text-start webfont pt-4 ' style={{display:'flex', justifyContent:'center',alignItems:'center'}}> Experience the power of AWS with FTB Innosphere. As a leading provider of AWS services, we empower businesses to leverage the full potential of cloud computing.  </h6>
        <h5 className='text-start pt-4 heading' style={{display:'flex', justifyContent:'center',alignItems:'center'}}> Why choose AWS with FTB Innosphere: </h5>
        
        

        <div className='container pt-2' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <ul>
                <li className='text-start webfont1 pt-3'> <strong>Expert Guidance:</strong>  Our AWS experts provide valuable insights and guidance for your cloud journey.</li>
                <li className='text-start webfont1 pt-3'> <strong>Scalability and Flexibility:</strong>  Scale resources on-demand  to meet your business needs.</li>
                <li className='text-start webfont1 pt-3'> <strong>Cost Efficiency:</strong>   Optimize your IT budget with pay-as-you-go pricing. </li>
                <li className='text-start webfont1 pt-3'> <strong>Reliability:</strong>  Rely on AWS's secure and highly available infrastructure.</li>
                <li className='text-start webfont1 pt-3'> <strong>Future-Ready:</strong>  Stay ahead of the curve with AWS's cutting-edge technologies.</li>

            </ul>
        </div>
        <p className='text-start webfont pt-2' style={{display:'flex', justifyContent:'center',alignItems:'center'}}> Unlock new possibilities for your business with AWS. <a href='/contact' className=''> Contact us  </a>   today to explore how our tailored AWS solutions can drive your success.</p>

    </div>
            
        
    
    
    

    </>
  )
}
