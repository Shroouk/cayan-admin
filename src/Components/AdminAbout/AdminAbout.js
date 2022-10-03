import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useState } from "react";
import Nav from '../Nav/Nav';

import './AdminAbout.css'

const AdminAbout = ()=> {


  

    const [aboutUs, setaboutUs] = useState([])
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [createdAt, setcreatedAt] = useState(null);
    const [aboutUsId,setaboutUsId]=useState(null);

    const [message, setMessage] = useState("");
  
    useEffect(() => {
      getaboutUs();
    }, [])
    function getaboutUs() {
      fetch("https://backend.mo3ts.com/aboutUs").then((result) => {
        result.json().then((resp) => {
           //console.warn(resp)
          setaboutUs(resp)
          settitle(resp[0].title)
          setaboutUsId(resp[0].id)
          setcreatedAt(resp[0].createdAt)
          setcontent(resp[0].content)
          
        })
      })
    }
   
    /* function deleteaboutUs(id) {
      fetch(`https://backend.mo3ts.com/aboutUs/${aboutUsId}`, {
        method: 'DELETE'
      }).then((result) => {
        result.json().then((resp) => {
          console.warn(resp)
          getaboutUs()
        })
      })
    } */


    const  deleteaboutUs = async(id,e)=>{
         

      
      if(window.confirm("Are you sure you want to delete this about us section")){
        try {
            let resl = await fetch(`https://backend.mo3ts.com/aboutUs/${aboutUsId}`, {
              method: "DELETE",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization":localStorage.getItem("cayanToken")
              },
              body: JSON.stringify([{   
                id: aboutUsId,
              }]),
            });
            let reslJson = await resl.json();
            if (resl.status === 200) {
                
              getaboutUs()
            } else {
            }
          } catch (err) {
            console.log(err);
          }
      }
        }



    function selectaboutUs(i,id){
      let item=aboutUs[i];
      console.log(i)
      settitle(item.title)
      setaboutUsId(item.id)
      console.log(aboutUsId)
      setcontent(item.content)
    }




   
 

   /*  function updateaboutUs(){
    
      fetch(`https://backend.mo3ts.com/aboutUs/${aboutUsId}`, {
        method: 'PUT',
        headers:{
          'Content-Type':'application/json',
          "Authorization":localStorage.getItem("cayanToken"),
         
        },
        body: JSON.stringify([{
          id:aboutUsId,
          title: title,
          content:content

      }])
      }).then((result) => {
        result.json().then((resp) => {
          console.warn("ressssssssssponse: ", resp)
          getaboutUs()
        })
      })
    } 
 */



  /*   function updateaboutUs()
  {
    let item={title,content}
    console.warn("item",item)
    fetch(`https://backend.mo3ts.com/aboutUs/${aboutUsId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        "Authorization":localStorage.getItem("cayanToken"),
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getaboutUs()
      })
    })
  } */



    let updateaboutUs = async (e) => {
      let item={title,content}
      e.preventDefault();
      try {
        let res = await fetch(`https://backend.mo3ts.com/aboutUs/${aboutUsId}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              "Authorization":localStorage.getItem("cayanToken")
          },
          body:JSON.stringify(item),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setMessage("about us updatedddd successfully");
          console.log(resJson)
          getaboutUs()
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };






    return (

        <>

<Nav pageName="/ About Us" />

        <div className='container mt-5'>
                    <h3 className="section-title admin-career-section-title">Update about Us Data  </h3> 
                </div>
      <div className="container">
         

          <div className='row'>
                      {message ?    <div className="alert alert-info alert-dismissible fade show" role="alert">
                      {<p>{message}</p> }
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                      </div> : null}
          </div>


        <div className='row'>
            <div className='col-8'>
            <table className="table table-dark table-hover ">
            <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">title</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
            <tbody>
                
                {
                aboutUs.map((item, i) =>
                    <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                        
                        <button className="btn btn-primary edit-btn" onClick={() => selectaboutUs(i,item.id)}>Update</button>
                      {/*   <button className="btn btn-danger delete-btn" onClick={() => deleteaboutUs(i)}>Delete</button> */}
                    </td>
                    
    
                    </tr>
                )
                }
            </tbody>
            </table>


            {/* <div className='row new-btn-wrapper'>
                    <Link to="/new-about-us" className="admin-sec-read-btn">Add New About Us</Link>

                   
                    </div> */}


            </div>

            <div className='col-4'>

            


            
            <div>
            <div className="mb-3">
            <label className="form-label custom-form-label">Title: </label> 
            <input className="form-control"  type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} /> <br /><br />
            </div>
           

            <label className="form-label custom-form-label">About Us Content </label>    
            <div className="mb-3" >
            
            <textarea className="form-control" rows="10"  type="text" value={content}  onChange={(e)=>{setcontent(e.target.value)}} />
            </div>
           
            <button className="admin-sec-read-btn" onClick={updateaboutUs} >Update aboutUs</button>  
            </div>
            </div>
        </div>
       
        
      </div>
      </>
    );
  }
export default AdminAbout;