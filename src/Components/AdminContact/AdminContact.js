import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useState } from "react";
import Nav from '../Nav/Nav';



const AdminContact = ()=> {

    const [contactUs, setcontactUs] = useState({})
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [phone, setphone] = useState("");
    const [contactUsId,setcontactUsId]=useState(null);
    const [message, setMessage] = useState("");
  
    useEffect(() => {
      getcontactUs();
    }, [])
    function getcontactUs() {
      fetch("https://backend.mo3ts.com/contactUs").then((result) => {
        result.json().then((resp) => {
           //console.warn(resp)
          setcontactUs(resp)
          setemail(resp[0].email)
          setcontactUsId(resp[0].id)
          setphone(resp[0].phone)
          setaddress(resp[0].address)
          
        })
      })
    }
  
  






    function selectcontactUs(){
      let item=contactUs;

      setemail(item.email)
      setcontactUsId(item.id)
      setphone(item.phone)
      setaddress(item.address)
    }






   let updatecontactUs = async (e) => {
      let item={email, phone, address}
      e.preventDefault();
      try {
        let res = await fetch(`https://backend.mo3ts.com/contactUs`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              "Authorization":localStorage.getItem("cayanToken")
          },
          body:JSON.stringify(item),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setMessage("contact us updatedddd successfully");
        //  console.log(resJson)
        getcontactUs()
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };






    return (

        <>

<Nav pageName="/ Contact Us" />

        <div className='container mt-5'>
                    <h3 className="section-title admin-career-section-title">Update Contact Us Data  </h3> 
                </div>
      <div className="container">
         

          <div className='row'>
                      {message ?    <div class="alert alert-info alert-dismissible fade show" role="alert">
                      {<p>{message}</p> }
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div> : null}
          </div>


        <div className='row'>
        <div>
            <div className="mb-3">
            <label className="form-label custom-form-label">Address: </label> 
            <input className="form-control"  type="text" value={address} onChange={(e)=>{setaddress(e.target.value)}} /> <br /><br />
            </div>

            <div className="mb-3">
            <label className="form-label custom-form-label">Phone: </label> 
            <input className="form-control"  type="text" value={phone} onChange={(e)=>{setphone(e.target.value)}} /> <br /><br />
            </div>

            <div className="mb-3">
            <label className="form-label custom-form-label">Email: </label> 
            <input className="form-control"  type="text" value={email} onChange={(e)=>{setemail(e.target.value)}} /> <br /><br />
            </div>
           

           
           
             <button className="admin-sec-read-btn" onClick={updatecontactUs} >Update Contact Us</button>   
            </div>

            
        </div>
       
        
      </div>
      </>
    );
  }
export default AdminContact;
