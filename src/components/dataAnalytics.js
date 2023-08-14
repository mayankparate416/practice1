import React from 'react';
import data_image from '../images/data_analytics.jpg';
import Pre from '../datapre.png';
import Filter from '../filter.png';
import Extract from '../extract.png';
import Report from '../report.png';
import '../css/media.css';
import '../css/bg.css';

export default function dataAnalytics() {
  return (
    <>




      <div style={{padding:'20px'}} className='container-fluid bg-black bg-gradient pt-3'>
        <div className='row'>
              <div className='container-fluid  pt-2'>
                <div className='heading pt-1' style={{color:'white'}}> DATA ANALYTICS</div>
                <div className='pt-2'>
                  <h3 className='webfont pt-2' style={{color:'white'}}> We are helping our clients to move to modern data solutions and deliver them a quality solutions </h3>
                  <h5 className='pt-3 webfont' style= {{color:'white'}}> Data is described as " New Oil of the <strong> Digital Economy </strong>"</h5>
                  <h5 className='pt-3 webfont' style={{color:'white'}}> Analytics is the "extensive use of data, statistical and quantitative analysis,
                   explanatory and predictive models, and fact-based management to drive decisions and actions"</h5>
                </div>
              </div>
            
        </div>
      </div>
      
    <div style={{width:'100%'}}>
      <img style={{width:'100%'}} src={data_image} alt='research' />
    </div>

      <div className='container-fluid bg-body-secondary' style={{paddingBottom:'50px'}}>
        <div className='container'>
          <h4 className='pt-4 heading'style={{color:'rgb(78, 2, 36)', paddingBottom:'40px'}}> How We Approach the Data </h4>
          <div className='row'>
            <div className='col-md-3 text-center'>
              <img className='icons' style={{width:'5rem', maxWidth:'100%'}} src={Pre} alt='preprocessing'></img>
              <p style={{color:'rgb(78, 2, 36)'}} className="pt-2 webfont1"> Data Preprocessing </p>
            </div>
            <div className='col-md-3 text-center'>
              <img  className='icons' style={{width:'5rem', maxWidth:'100%'}} src={Extract} alt='extraction'></img>
              <p style={{color:'rgb(78, 2, 36)'}} className="pt-2 webfont1">Extracting the Relevant Data</p>
            </div>
            <div className='col-md-3 text-center'>
              <img  className='icons' style={{width:'5rem', maxWidth:'100%'}} src={Filter} alt='datafilter'></img>
              <p style={{color:'rgb(78, 2, 36)'}} className="pt-1 webfont1">  Data Filtering</p>
            </div>
            <div className='col-md-3 text-center'>
              <img  className='icons' style={{width:'5rem', maxWidth:'100%'}} src={Report} alt='report'></img>
              <p style={{color:'rgb(78, 2, 36)'}} className="pt-2 webfont1"> Report Generation</p>
            </div>
          </div>
        </div>
      </div>
      



      <div className='container pt-3'>
        <div style={{fontSize:'2vw',color:'rgb(78, 2, 36)'}} className='text-center'> 
           <div> "TALENT </div> <div> WINS THE GAMES, BUT </div> 
           <div style={{color:''}}> TEAMWORK AND INTELLIGENCE </div> WINS THE CHAMPIONSHIP."
  
        </div>
      </div>

      
    </>
  )
}
