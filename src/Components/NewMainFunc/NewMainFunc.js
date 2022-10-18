import React, { Component } from 'react';
import { useState } from "react";

import { useNavigate} from 'react-router-dom';

import Nav from '../Nav/Nav';

import './NewMainFunc.css'

const NewMainFunc = ()=> {

    const [mainFunc, setMainFunc] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    let handleAddMainFunc = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://backend.mo3ts.com/services/mainFunctions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTQ1MjUzMzksImV4cCI6MTY1NDUzMjUzOX0.sJNNiYuS8FqioZZ-uCVrT4I0rPuphVn6p2uptUaHFPw"
                "Authorization":localStorage.getItem("cayanToken")
            },
            body: JSON.stringify([{
                
              func: mainFunc,
            }]),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setMainFunc("");
            setMessage("Main function created successfully");
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
 
      let msg =  (!message) ? null : <div className="alert alert-success w-50" role="alert"> {message}</div>

        return(
        

            <>        
            <Nav pageName="/ Main Function/Add" />

            <div className='container mt-5'>
                <h3 className="section-title admin-career-section-title">Add New Main Function</h3> 
            </div>

            <div className='container'>


            {msg}


                <div className='form-wrapper'>

                <form onSubmit={handleAddMainFunc}>
                <div className="mb-3">
                    <label htmlFor="main-func" className="form-label">Main Function</label>
                    <input 
                    type="text" 
                    required
                    className="form-control" 
                    id="main-func" 
                    value={mainFunc}
                    placeholder="Enter new main function"
                    onChange={(e) => setMainFunc(e.target.value)}/>
                </div>
               
             
             
                <button type="submit" className="admin-sec-read-btn">Save</button>

                

                </form>
                </div>
            </div>

      
        </>

            
        )
    

}

export default NewMainFunc;
