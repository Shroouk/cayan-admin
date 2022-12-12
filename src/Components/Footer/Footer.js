import React from 'react';

import './Footer.css'

const Footer = (props)=>{
    return(
     <>
        <svg className="curveDownColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 C 50 100 80 100 100 0 Z"></path>
            </svg>

        <div className='extra-bg'></div>

     <footer className='page-footer'>
     <div className='container'>
        <div className='row'>
           {/*  <div className='col-12  col-lg-4 mb-5'>
                <div className='row mb-5'>
                    <h4>About</h4>
                </div>
                <div className='row'>
                    <p>Cayan Oil Company established in 2005 under the name of Creative Masterpieces for Pipes and change its name to Cayan Oil Company in 2021 as the Arm of Sahm Belady Group in Oil & Gas.</p>
                </div>
            </div> */}
            <div className='col-12  col-lg-4 mb-5'>
            <div className='row mb-5'>
                    <h4>More Info</h4>
                </div>
                <div className='row'>
                    <p>Cayan was established in Saudi Arabia with an aim to provide quality materials, equipment and technical services to various industrial sectors.</p>
                </div>
            </div>
            

            <div className='col-12  col-lg-4 mb-5'>
            <h4>Our Partner</h4>
            
                <div className='row'>
                    <div className='col align-self-center'>
                        <span>Cayan is a partner with Drexel Oilfield</span>
                    </div>
                    <div className='col'>
                        <img className='' src="/assets/Drexel.png" alt='Drexel'/>
                    </div>
                   
                </div>
            </div>

            <div className='col-12  col-lg-4 mb-5'>
            <div className='row mb-5'>
                    <h4>You Can Reach Us At</h4>
                </div>
                <div className='row'>
                    <div className='col'>
                        <a href='#'> <i className="fa fa-facebook"></i> </a>
                    </div>
                    <div className='col'>
                        <a href='#'> <i className="fa fa-twitter"></i> </a>
                    </div>
                    <div className='col'>
                        <a href='#'> <i className="fa fa-linkedin"></i> </a>
                    </div>
                </div>
            </div>

        </div>

        <div className='row text-center mt-5'>
        <p className="source-org copyright">© 2022 | Copyright <b className='footer-cayan'>CAYAN</b> All Rights Reserved.</p>
        </div>
     </div>
     
     </footer>
           
     </>
    )
}
export default Footer;