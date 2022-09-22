import React, { Component, useEffect } from 'react';
import { useState } from "react";
import Nav from '../Nav/Nav';
import { useParams, withRouter } from "react-router";
import { useNavigate} from 'react-router-dom';



const EditMainFunc = ()=> {


  const navigate = useNavigate();

    const params = useParams();

    const [mainFunc, setMainFunc] = useState("");
    const [message, setMessage] = useState("");



  
    

    let handleEditMainFunc = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("https://backend.mo3ts.com/services/mainFunctions", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                //"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTQ1MjUzMzksImV4cCI6MTY1NDUzMjUzOX0.sJNNiYuS8FqioZZ-uCVrT4I0rPuphVn6p2uptUaHFPw"
                "Authorization":localStorage.getItem("cayanToken")
            },
            body: JSON.stringify([{
                id:params.id,
              func: mainFunc,
            }]),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setMainFunc("");
            setMessage("Main function updated successfully");
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
            <Nav pageName="/ Main Function/Add" />

            <div className='container mt-5'>
                <h3 className="section-title admin-career-section-title">Edit Main Function</h3> 
            </div>

            <div className='container'>

            <div className='row'>
                      {message ?    <div class="alert alert-info alert-dismissible fade show" role="alert">
                      {<p>{message}</p> }
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div> : null}
          </div>

                <div className='form-wrapper'>

                <form onSubmit={handleEditMainFunc}>
                <div className="mb-3">
                    <label htmlFor="main-func" className="form-label">Main Function</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="main-func" 
                    required
                    value={mainFunc}
                    placeholder={params.func}
                    onChange={(e) => setMainFunc(e.target.value)}/>
                </div>
               
             
             
                <button type="submit" className="admin-sec-read-btn">Save</button>

               {/*  <div className="message">{message ? <p>{message}</p> : null}</div> */}

                </form>
                </div>
            </div>

      
        </>

            
        )
    

}

export default EditMainFunc;
