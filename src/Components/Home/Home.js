import React, { Component } from 'react';

import BootstrapCarouselComponent from '../carouselComponent/BootstrapCarouselComponent';
import ContactInfo from '../ContactInfo/ContactInfo';

 /*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
*/
import './Home.css'

class Home extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
        
 
 
    render(){
      
        return(
            <>        
            {/* ======== header ============ */}
            <header className='hero'>
            <div className="overlay">
            <h1>CAYAN</h1>
                <img  className='hero-logo' src='/assets/logo2.png' alt='cayan-logo-img'/>
            <h3>Oil Company Limited</h3>
            
            <div className='typing-txt'>
            <p>We are providing wide range of supporting services to all Oil & Gas companies.</p>
            </div>
            <br/>
            <a href='#our-services'><button className='read-btn hero-read-more'>READ MORE</button></a>
            
                </div>
            </header>


            {/* ======== services section  ============ */}

            <svg className="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>

            <div className='services-sec-wrapper' id='our-services'>
                <div className='row text-center mb-5 w-100'>
                <h2>Core Values</h2>
                </div>

                <div className='container'>
                <div className="row services-sec-row">
              
                <div className="col-12 col-md-6 col-lg-3 service-box service-1">
                        <div className="content">
                            <div className="service-icon">
                            <i className="fa fa-heart circle-icon"></i>
                            </div>
                            <div className="service-entry">
                                <h3>Services</h3>
                                <p>CAYAN provides Oil & Gas services supporting the exploration, drilling, production and refining of petroleum.</p>
                                {/* <a className="read-more services-sec-btn" href="/services">Read More</a> */}
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-lg-3 service-box service-1">
                        <div className="content">
                            <div className="service-icon">
                            <i className="fa fa-leaf circle-icon"></i>
                            </div>
                            <div className="service-entry">
                                {/* <h3>Environment Protection</h3> */}
                                <h3>QHSE</h3>
                                <p>Quality, Health, Safety, and Environment are the basic elements in the prime importance for the continuous success of the business strategy of Cayan Oil Company in providing high-specialized Services to the Oil and Gas Industry.</p>
                                {/* <a className="read-more services-sec-btn" href="/services">Read More</a> */}
                            </div>
                        </div>
                    </div>



                    <div className="col-12 col-md-6 col-lg-3 service-box service-1">
                        <div className="content">
                            <div className="service-icon">
                            <i className="fa fa-briefcase circle-icon"></i>
                            </div>
                            <div className="service-entry">
                                <h3>Employees</h3>
                                <p>Cayan provides the qualified & competent persons necessary for the effective of the operation and control of its processes.</p>
                                {/* <a className="read-more services-sec-btn" href="/services">Read More</a> */}
                            </div>
                        </div>
                    </div>



                    <div className="col-12 col-md-6 col-lg-3 service-box service-1">
                        <div className="content">
                            <div className="service-icon">
                            <i className="fa fa-truck circle-icon"></i>
                            </div>
                            <div className="service-entry">
                                <h3>Interested Parties</h3>
                                <p>Cayan ensure the implementation of the needs & expectations of interested parties, including the fulfillment of the requirement to meet the service specification and compliance with the applicable laws.</p>
                                {/* <a className="read-more services-sec-btn" href="/services">Read More</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
           
            </div>

            <svg className="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
            </svg>






            {/* ======== company section  ============ */}
            <div className='sec-grey'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm-12 col-lg-6'>
                        <div className=" ">

                        <h6 className="special-heading  cayan-heading ">
                        <span className="bold ">
                        CAYAN	</span>
                        </h6>
                        <div className="fw-divider-space divider-25"></div>
                        <h4 className="special-heading   ">
                        <span className="bold  big-line-height mb-3">
                        Our company One of the Most Effective companies	</span>
                        </h4>
                        <div className="fw-divider-space divider-25"></div>
                        <p>Cayan has established itself as a reliable supplier & service provider to the oil and gas industry, water, power & energy sector, and various other public & private sector organizations.</p>
                        </div>
                        </div>
                        <div className='col-sm-12 col-lg-6'>
                            <img className='person-img' src='/assets/img.png' alt="cayan-img"/>
                        </div>
                    </div>
                </div>
            </div>





            {/* ======== quote section  ============ */}

            <svg className="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>

            <div className='container text-center'>
                <div className='row justify-content-center'>
                {/* <i className="fa fa-quote-left slide-quote"></i> */}
                <img className='carousel-logo' src='/assets/logo2.png' alt='cayan-logo-img' />
                </div>

                <div className='row'>
                <BootstrapCarouselComponent/>
                </div>
            </div>


            <svg className="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
            </svg>



             {/* ======== vision section  ============ */}
             <div className='sec-grey-2'>

             <div className='row text-center mb-5 w-100'>
                <h2>More About CAYAN</h2>
                </div>

                 <div>

                <div className='row vision-sec'>
                    <div className='col-12  col-lg-4'>
                    <article className="card">
                    <picture className="thumbnail">
                    <img className="category__01" src="assets/target.png" alt="cayan-img" />
                    </picture>
                    <div className="card-content">
                    <p className="category category__01">Our mission</p>
                    
                    <p>To exceed our customer expectations through value-driven expertise. </p>
{/*                         <p>Providing (technical and non-technical ) services in the most qualified and professional level to petroleum companies in the petroleum sector regarding health, safety, quality standards in providing the services</p>
 */}                </div>
                    
                    </article>
                    </div>


                    <div className='col-12  col-lg-4'>
                    <article className="card">
                    <picture className="thumbnail">
                    <img className="category__01" src="assets/goal.png" alt="cayan-img" />
                    </picture>
                    <div className="card-content">
                    <p className="category category__01">Our vision</p>
                    
                    <p>
                    We don`t want to be the biggest, we want to be the best – to be able to provide each individual customer, no matter how small, with the best in service and selection.
                        </p>
{/*                         <p>CAYAN is seeking to provide the best service in the lowest cost possible through trained labors and increasing the value adds through activating the activities that is not depending on labors and the recent activities (marine - transporting - heavy equipment’s maintenance) and some supporting activities to drilling operations like producing maintenance.</p>
 */}                </div>
                    
                    </article>
                    </div>
                    <div className='col-12  col-lg-4'>
                    <article className="card">
                    <picture className="thumbnail">
                    <img className="category__01" src="assets/support.png" alt="" />
                    </picture>
                    <div className="card-content">
                    <p className="category category__01">Our services</p>
                    
                    <p>Ensuring the highest standard of quality and safety complying with all regulations and international standards and continue usually developing our highly professional workforce. 
                   {/*  <br/>- providing technical and non-technical services. 
                    <br/>- logistic services: drilling and exploration assisting works and services.. */}</p>
                </div>
                    
                    </article>
                    </div>
                </div>

                 </div>
             </div>



{/* ========  section  ============ */}

        <svg className="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>

            <div className='container '>
            <div className='row text-center mb-5'>
                <h2>Contact</h2>
            </div>

            <div className='row'>
            <div className="col-sm-12 col-lg-6 align-self-center">
            <iframe title="cayan-address"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.8077933723785!2d50.11156092951944!3d26.42967853379894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb71f651e279%3A0x178b36bb1550bb86!2sAlWaha%20Downtown%20Mall!5e0!3m2!1sen!2seg!4v1652189910983!5m2!1sen!2seg"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
{/*         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463876.9397147176!2d46.54234411876101!3d24.725555344345064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1649682749368!5m2!1sen!2seg"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
 */}      
            </div>



             <div className='col-sm-12 col-lg-6'>
             <ContactInfo/>
             </div>
            </div>
            </div>


          
            </>



            
        )
    }

}

export default Home;



