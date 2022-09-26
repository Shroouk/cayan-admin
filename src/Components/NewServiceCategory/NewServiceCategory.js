import React, { Component } from 'react';
import { useState } from "react";
import Nav from '../Nav/Nav';


const NewServiceCategory = ()=> {

    const [serviceCat, setserviceCat] = useState("");
    const [message, setMessage] = useState("");



    let handleAddserviceCat = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://backend.mo3ts.com/services/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":localStorage.getItem("cayanToken")
            },
            body: JSON.stringify({
                
                serviceMainName: serviceCat,
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setserviceCat("");
            setMessage("Service Category created successfully");
            console.log(resJson)
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };
 
      let msg =  (!message) ? null : <div className="alert alert-success w-50" role="alert"> {message}</div>

        return(
        

            <>        
            <Nav pageName="/ Service Category /Add" />

            <div className='container mt-5'>
                <h3 className="section-title admin-career-section-title">Add New Service Category </h3> 
            </div>

            <div className='container'>


            {msg}

                <div className='form-wrapper'>

                <form onSubmit={handleAddserviceCat}>
                <div className="mb-3">
                    <label htmlFor="main-func" className="form-label">Service Category</label>
                    <input 
                    type="text" 
                    required
                    className="form-control" 
                    id="main-func" 
                    value={serviceCat}
                    placeholder="Enter new Service Category"
                    onChange={(e) => setserviceCat(e.target.value)}/>
                </div>
               
             
             
                <button type="submit" className="admin-sec-read-btn">Save</button>

                

                </form>
                </div>
            </div>

      
        </>

            
        )
    

}

export default NewServiceCategory;
