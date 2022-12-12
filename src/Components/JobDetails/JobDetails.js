import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import Spinner from '../Spinner/Spinner';
import Header from '../Header/Header';
import './JobDetails.css'


const JobDetails = (props) => {
	const params = useParams();
	const [JobDetails, setJobDetails] = useState({});





	//console.log(params);
	useEffect(() => {
		async function fetchData() {
			const res = await axios(
				`https://backend.mo3ts.com/career/vacancy/${params.id}`
			);
			
			setJobDetails(res.data);
            console.log(JobDetails)
		}
		fetchData();

       
	}, [params.id]); 



  const diffTime = Math.abs(new Date(JobDetails.updatedAt) - new Date());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 


    let careersContent =  Object.keys(JobDetails).length === 0 ?  <Spinner/> : <>
    
      
    <div className='container details-wrapper'>
      <div className='row text-center mt-5'>
          <h3 className='page-title'>{JobDetails.title}</h3>
      </div>

      <div className='row mt-5'>
      <div className="main-text">
              <h2 className="section-title">Details</h2>
              <div className="row"><div className="col posted-date">Posted {diffDays} day ago</div></div>
              <div className="row details-row">
                  <div className="col-sm-2 details-col">Experience Needed : </div> <div className="col-sm-10">{JobDetails.experienceInYears} Years</div>
                </div>
                <div className="row details-row">
                  <div className="col-sm-2 details-col">Career Level : </div> <div className="col-sm-10">{JobDetails.careerLevel}</div>
                </div>
                <div className="row details-row">
                  <div className="col-sm-2 details-col">Education Level : </div> <div className="col-sm-10">{JobDetails.educationLevel}</div>
                </div>
                <div className="row details-row">
                  <div className="col-sm-2 details-col">Salary : </div> <div className="col-sm-10">{JobDetails.salary}</div>
                </div>
            
              
              {!JobDetails.descriptions ||
    <>
    <h2 className="section-title sub">Descriptions: </h2>
      {
        
       
        <div className="row mb-3">
                            <div className=""><i className="fa fa-caret-right single-check"></i> {JobDetails.descriptions} </div>
                        </div>
                      
      }
    </>
  }


              {!JobDetails.requirements ||
    <>
    <h2 className="section-title sub">Requirements: </h2>
      {
          JobDetails.requirements.map((reqmnt)=>(
           
            
            <div className="row mb-3" key={reqmnt}>
                            <div className=""><i className="fa fa-check single-check"></i> {reqmnt} </div>
                        </div>
            
        ))
      }
    </>
  }

          </div>
      </div>


      <div className='row mt-5'>
      <h2 className="section-title sub">Join Our Team: </h2>

      <div>
          <h5>Send Your CV to <em className='cayan-mail'>cayan@cayan-co.com</em></h5>
      </div> 
      </div>
      </div>
      
    </>
    
    

	return (
        
       

    <>
    <Header page="Job Details"/>
  {careersContent}
    

    </>

	
	);
};

export default JobDetails;


