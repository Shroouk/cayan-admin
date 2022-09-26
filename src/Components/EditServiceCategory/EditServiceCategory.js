import React, { Component, useEffect } from 'react';
import { useState } from "react";
import Nav from '../Nav/Nav';
import { useParams, withRouter } from "react-router";
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';



const EditServiceCategory = ()=> {


  const navigate = useNavigate();

    const params = useParams();

    const [serviceCat, setserviceCat] = useState("");
    const [message, setMessage] = useState("");



  
    

    let handleEditServiceCategory = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://backend.mo3ts.com/services/category", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization":localStorage.getItem("cayanToken")
            },
            body: JSON.stringify({
                id:params.id,
                serviceMainName: serviceCat,
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setserviceCat("");
            setMessage("service category updated successfully");
            console.log(resJson)
            setTimeout(
              () => navigate(-1), 
              3000
            );

          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };
 











        return(
        

            <>        
            <Nav pageName="/ Service Category/ Edit" />

            <div className='container mt-5'>

            <div className='row'>
              <div className='col-8'>  <h3 className="section-title admin-career-section-title">Edit Service Category</h3>  </div>
              <div className='col-4'> <Link to={`/servicecatdetails/${+params.id}`}  className="btn btn-danger">View Service Details</Link></div>
            </div>
               
            </div>

            <div className='container'>

            <div className='row'>
                      {message ?    <div className="alert alert-info alert-dismissible fade show" role="alert">
                      {<p>{message}</p> }
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div> : null}
          </div>

                <div className='form-wrapper'>

                <form onSubmit={handleEditServiceCategory}>
                <div className="mb-3">
                    <label htmlFor="main-func" className="form-label">Service Category</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="main-func" 
                    required
                    value={serviceCat}
                    placeholder={params.service}
                    onChange={(e) => setserviceCat(e.target.value)}/>
                </div>
               
             
             
                <button type="submit" className="admin-sec-read-btn">Save</button>

               {/*  <div className="message">{message ? <p>{message}</p> : null}</div> */}

                </form>
                </div>
            </div>

      
        </>

            
        )
    

}

export default EditServiceCategory;
