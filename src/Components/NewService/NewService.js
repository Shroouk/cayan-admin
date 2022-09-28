import React, { Component } from 'react';
import { useState } from "react";
import Nav from '../Nav/Nav';
import { useParams, withRouter } from "react-router";
import { useNavigate} from 'react-router-dom';

const NewService = ()=> {


    const navigate = useNavigate();

    const params = useParams();

    const [serviceName, setserviceName] = useState("");
    const [serviceDescription, setserviceDescription] = useState("");
    const [ServicesMainId, setServicesMainId] = useState(params.id);
    const [message, setMessage] = useState("");



    let handleAddservice = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://backend.mo3ts.com/services/service", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":localStorage.getItem("cayanToken")
            },
            body: JSON.stringify({
                
                serviceName: serviceName,
                serviceDescription: serviceDescription,
                ServicesMainId:ServicesMainId
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setserviceName("");
            setMessage("Service created successfully");
            console.log(resJson)
          } else {
            alert("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };
 
      let msg =  (!message) ? null : <div className="alert alert-success w-50" role="alert"> {message}</div>

        return(
        

            <>        
            <Nav pageName="/ Service /Add" />

            <div className='container mt-5'>
                <h3 className="section-title admin-career-section-title">Add New Service </h3> 
            </div>

            <div className='container'>


            {msg}

                <div className='form-wrapper'>

                <form onSubmit={handleAddservice}>
                <div className="mb-3">
                    <label htmlFor="serviceName" className="form-label">Service Name</label>
                    <input 
                    type="text" 
                    required
                    className="form-control" 
                    id="serviceName" 
                    value={serviceName}
                    placeholder="Enter new Service"
                    onChange={(e) => setserviceName(e.target.value)}/>

                  
                </div>
                <div className="mb-3">
                   
                    <label htmlFor="serviceDes" className="form-label">Service Description</label>
                    <input 
                    type="text" 
                    required
                    className="form-control" 
                    id="serviceDes" 
                    value={serviceDescription}
                    placeholder="Enter new Service Description"
                    onChange={(e) => setserviceDescription(e.target.value)}/>
                </div>
               
             
             
                <button type="submit" className="admin-sec-read-btn">Save</button>

                

                </form>
                </div>
            </div>

      
        </>

            
        )
    

}

export default NewService;
