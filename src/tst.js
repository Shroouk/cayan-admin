/* import React, { Component } from 'react'
import ContactInfo from '../ContactInfo/ContactInfo';
import Header from '../Header/Header';
import MainFunction from '../MainFunction/MainFunction';
import './SingleService.css'

class SingleService extends Component {




    
  render() {
    return (
      <>
      <Header page="Service 1"/>
    
        <div className='container details-wrapper'>
    

 <MainFunction/>
        <div className='row mt-5'>

        <div className="col-sm-2 col-lg-3 thumbnail-wrapper">
        <div className="thumbnail3 t-one">
            <img className='thumbnail2-img' src='assets/pump-jack.svg'/>
        </div>
        </div>

        <div className="col-sm-10 col-lg-9">

        <div className="main-text">
                <h3 className="section-title">Service 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 
                </p>
              
               
            </div>

        </div>

    
        </div>



        <div className='row mt-5'>

            <div className="col-sm-12 col-lg-6 ">
            <div className="main-text">
                <div className="we-do-sec">
                <h3 className="section-title single-do-sec">What We Do</h3>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <div className="row mb-3">
                        <div className="col-sm-1"> <i className="fa fa-check single-check"></i> </div>
                        <div className="col-sm-11">100% Secure, consectetuer adipiscing elit, sed diam nonummy nibh euismod. </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-1"> <i className="fa fa-check single-check"></i> </div>
                        <div className="col-sm-11">Easy to claim, sed diam nonummy nibh euismod. Lorem ipsum dolor sit amet. </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-1"> <i className="fa fa-check single-check"></i> </div>
                        <div className="col-sm-11">More benefit nonummy nibh euismod. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </div>
                    </div>
                </div>
                   
                
                
                </div>
            </div>

            <div className="col-sm-12 col-lg-6">

            <div className="main-text">
                    <ContactInfo/>
                
                
                </div>

            </div>


            </div>


       
        </div>

      </>
    )
  }
}

export default SingleService; */









import React, { useEffect, useState } from "react";
import { useParams, withRouter } from "react-router";
import axios from "axios";


import ContactInfo from '../ContactInfo/ContactInfo';
import Header from '../Header/Header';
import MainFunction from '../MainFunction/MainFunction';
import './SingleService.css'


const SingleService = (props) => {
	const params = useParams();
	const [SingleService, setSingleService] = useState({});

    const [SingleServicesBenefits, setSingleServicesBenefits] = useState({});



	//console.log(params);
	useEffect(() => {
		async function fetchData() {
			const res = await axios(
				`https://backend.mo3ts.com/services/${params.service_id}/${params.id}`
			);
			//console.log("response", res);
			setSingleService(res.data);
            setSingleServicesBenefits(res.data.ServicesBenefits)

            console.log(res.data.ServicesBenefits)
            console.log(SingleServicesBenefits)
		}
		fetchData();
	}, []);






/* 
    let transformedSingleService= Object.keys(SingleService.ServicesBenefits)
    .map(igKey => {
 
        return [...Array(SingleService.ServicesBenefits[igKey])].map((_,i)=>{
            return (<p> igKey </p>)
        })
    })

    if(transformedSingleService.length === 0){
        transformedSingleService = <p className="text-center">Please Start adding ingredients</p>
    } */





	return (

        <>
        <Header page={SingleService.serviceName}/>
      
          <div className='container details-wrapper'>
      
  
   <MainFunction/>
          <div className='row mt-5'>
  
          <div className="col-sm-2 col-lg-3 thumbnail-wrapper">
          <div className="thumbnail3 t-one">
              <img className='thumbnail2-img' src='assets/pump-jack.svg'/>
          </div>
          </div>
  
          <div className="col-sm-10 col-lg-9">
  
          <div className="main-text">
                  <h3 className="section-title">{SingleService.serviceName}</h3>
                  <p>
                      {SingleService.serviceDescription}
                  </p>
                
                 
              </div>
  
          </div>
  
      
          </div>
  
  
  
          <div className='row mt-5'>
  
              <div className="col-sm-12 col-lg-6 ">
              <div className="main-text">
                  <div className="we-do-sec">
                  <h3 className="section-title single-do-sec">What We Do</h3>
                      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
  

 {/*                      {
      SingleService.ServicesBenefits.map((bnft)=>(
          <>
          
          <div className="row mb-3">
                          <div className="col-sm-1"> <i className="fa fa-check single-check"></i> </div>
                          <div className="col-sm-11">{bnft.benefitDescription} </div>
                      </div>
          </>
      ))
  } */}
                      
  
                  </div>
                     
                  
                  
                  </div>
              </div>
  
              <div className="col-sm-12 col-lg-6">
  
              <div className="main-text">
                      <ContactInfo/>
                  
                  
                  </div>
  
              </div>
  
  
              </div>
  
  
         
          </div>
  
        </>

	
	);
};

export default SingleService;