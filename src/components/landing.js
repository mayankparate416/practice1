import image from '../images/landing.jpg';
import client from '../images/professional1.jpg';
import explore from '../images/explore.jpg';
import '../css/textani.css';
import ProgressiveImage  from 'react-progressive-graceful-image';

export default function landing() {
    
  return (
    <>  
       

        <div className='image-container1' style={{width:'100%'}}>
            {/* <img src={image} className={`image${loading ? "loading" : "loaded"}`} style={{width:'100%',display:'flex',justifyContent:'center'}} alt="landing" /> */}
            {/* <h2 className='text'> Welcome to FTB InnoSphere</h2> */}
          <ProgressiveImage src={image}>
          {
            (src, loading) => (
              <img className={`image${loading ? "loading" : "loaded"}`} src={src} alt='..' width="100%" height='' />
            )
          }
        </ProgressiveImage>
        
        
        </div>

        <div className='container-fluid pt-4 letters-container' style={{padding:'50px', textAlign:'center', backgroundColor:'unset'}}>
          <h2 className='heading letter ' style={{color:'darkslategray'}}> Welcome to FTB InnoSphere</h2> 
          <div className='container '>
            <p className='webfont  pt-4 card4' style={{textAlign:'justify'}}> We are a leading provider of premier IT services for businesses worldwide. We specialize in resolving issues, implementing solutions, creating comprehensive documentation, and developing new reports based on existing system features.
                With our expertise and dedication, we empower businesses to optimize their operations and achieve their goals. </p>    
            <p className='webfont  pt-3 card4' style={{textAlign:'justify'}}> At FTB InnoSphere, we understand the critical role that efficient and well-functioning IT systems play in today's business landscape. 
            Our team of highly skilled professionals excels in identifying and resolving technical issues, ensuring smooth implementation of solutions, and providing ongoing support to ensure your systems perform at their best. 
            Whether you require prompt issue resolution, expert guidance during implementation, comprehensive documentation, or customized report development, we have the knowledge and experience to meet your requirements. </p>
          </div>
          
        </div>
                              
      <div className='conatiner-fluid bg-light pt-3' style={{padding:'20px'}}>
        <div className='row' style={{margin:'10px'}}>
          <div className='col-md-6 ' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <img className='rounded-circle shadow-lg ' src={client} width="70%"  alt=" commitment" />
          </div>
          <div className='col-md-6 ' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <h5 className='  webfont' style={{padding:'30px',textAlign:'justify'}}> With a commitment to exceptional service and client satisfaction, we work closely with our clients to understand their unique needs and challenges, tailoring our services to deliver the best possible results. 
              By choosing FTB InnoSphere, you're partnering with a company dedicated to your success. 
              We prioritize transparency, reliability, and long-term partnerships, and our track record of delivering tangible value to businesses across various industries speaks for itself.</h5>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-4" style={{paddingBottom:'40px'}}> 
            <div className='card border-0 pt-3'>
                <h2 className='heading'> About FTB InnoSphere</h2>
                <h5 className='pt-3 webfont'>We develop The <strong> Results</strong>  for <strong>Future</strong>, with new emerging and established technologies. </h5>
                <h5 className='pt-2 webfont'> We are having a team of members who deals and delivers the solutions of our client's problems. </h5>
                <h5 className='webfont pt-2'> At FTB InnoSphere, we stay abreast of the latest technologies and collaboration tools to provide cutting-edge solutions and foster productive teamwork. </h5>
                
            </div>
        </div>
    
    <div className='continer-fluid bg-light pt-4 ' style={{padding:'20px'}}>
      <div className='row'>
        <div className='col-md-5'>
          <div className='card card4 bg-light border-0' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
            <p className=' webfont' style={{padding:'50px',textAlign:'justify'}}> Explore our website to learn more about our comprehensive range of services and discover how we've helped businesses like yours overcome challenges and achieve their objectives.
              Be sure to read our client success stories and testimonials to see the positive outcomes we've delivered.
              <a href='/contact' > Contact us </a> today to discuss your specific needs, and let us help you optimize your IT systems and drive your business forward. </p>
          </div>


        </div>
        <div className='col-md-7' style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
          <img src={explore} width="70%" alt="explore" />
        </div>
      </div>
        
    </div>

    <div className="container-fluid pt-4 bg-body-secondary" style={{padding:'15px'}}>
        <h6 style={{color:'rgb(78, 2, 36)',fontSize:'2.2vw'}} className='text-center'>
        <div> "WE ARE HERE TO  </div> <div> PUT A <strong>DENT</strong> </div> <div>  IN THE <b>UNIVERSE</b></div>
        <div >OTHERWISE WHY ELSE </div> EVEN BE HERE." </h6>
    </div>
        
    </>
  )
}
