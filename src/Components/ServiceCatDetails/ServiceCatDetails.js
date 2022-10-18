import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useState } from "react";
import Nav from '../Nav/Nav';
import { useParams, withRouter } from "react-router";
import { useNavigate} from 'react-router-dom';


const ServiceCatDetails = ()=> {

  const params = useParams();
  const navigate = useNavigate();

    const [serviceCatDetails, setserviceCatDetails] = useState([])
    const [serviceName, setserviceName] = useState("");
    const [serviceDescription, setserviceDescription] = useState("");

    const [serviceCatDetailsId,setserviceCatDetailsId]=useState(1);
   
    const [serviceMainId,setserviceMainId]=useState(params.id);

    const [message, setMessage] = useState("");



   

  
    useEffect(() => {
      getserviceCatDetails();
    }, [])
    function getserviceCatDetails() {
      fetch(`https://backend.mo3ts.com/services/${serviceMainId}`).then((result) => {
       
        result.json().then((resp) => {
        if(resp.Services.length != 0){

          setserviceCatDetails(resp.Services)
          setserviceName(resp.Services[0].serviceName)
          setserviceCatDetailsId(resp.Services[0].id)
          setserviceDescription(resp.Services[0].serviceDescription)

        }else{
           navigate(`/new-service/${serviceMainId}`)
        }
         
         
          
          
        })
      })
    }


  
   

    const  deleteserviceCatDetails = async(id,e)=>{
         

      
      if(window.confirm("Are you sure you want to delete this ٍservice section")){
        try {
            let resl = await fetch(`https://backend.mo3ts.com/services/service`, {
              method: "DELETE",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization":localStorage.getItem("cayanToken")
              },
              body: JSON.stringify({   
                id: serviceCatDetailsId,
              }),
            });
            let reslJson = await resl.json();
            if (resl.status === 200) {
                
              getserviceCatDetails()
            } else {
            }
          } catch (err) {
            console.log(err);
          }
      }
        }



    function selectserviceCatDetails(i){
      let item=serviceCatDetails[i];
      
      setserviceName(item.serviceName)
      setserviceCatDetailsId(item.id)
      setserviceDescription(item.serviceDescription)
      
    }

/* 

    const  deleteserviceList = async(id)=>{
         
console.log(id)
      
      if(window.confirm("Are you sure you want to delete this service List")){
        try {
            let resl = await fetch(`https://backend.mo3ts.com/services/service/list`, {
              method: "DELETE",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization":localStorage.getItem("cayanToken")
              },
              body: JSON.stringify({   
                id: id,
              }),
            });
            let reslJson = await resl.json();
            if (resl.status === 200) {
                
              
            } else {
            }
          } catch (err) {
            console.log(err);
          }
      }
        } */
   
 



    let updateserviceCatDetails = async (e) => {
      let item={serviceCatDetailsId,serviceName,serviceDescription,serviceMainId}
      console.log(item)
      e.preventDefault();
      try {
        let res = await fetch(`https://backend.mo3ts.com/services/service`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              "Authorization":localStorage.getItem("cayanToken")
          },
          body:JSON.stringify({
            id:serviceCatDetailsId,
            serviceName:serviceName,
            serviceDescription:serviceDescription,
            ServicesMainId:serviceMainId
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setMessage("service updatedd successfully");
          console.log(resJson)
        

          getserviceCatDetails()
          setTimeout(()=>{setMessage("")}, 5000);
        } else {
          alert("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };





    return (

        <>

<Nav pageName="/ service" />

        <div className='container mt-5'>
                    <h3 className="section-serviceName admin-career-section-serviceName">Update service Data  </h3> 
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
                        <th scope="col">serviceName</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
            <tbody>
                
                {
                serviceCatDetails.map((item, i) =>
                    <tr key={i}>
                    <td>{i}</td>
                    <td>{item.serviceName}</td>
                    <td>
                        
                        <button className="btn btn-primary edit-btn" onClick={() => selectserviceCatDetails(i)}>Update</button>
                        <button className="btn btn-danger delete-btn edit-btn mr-3" onClick={() => deleteserviceCatDetails(item.id)}>Delete</button>
                {/*         <button className="btn btn-danger delete-btn" onClick={() => deleteserviceList(item.id)}>Delete List</button>  */}
                        <Link to={`/edit-service-list/${serviceMainId}/${item.id}`}  className="btn btn-warning edit-btn">List</Link>
                        
                    </td>
                    
    
                    </tr>
                )
                }
            </tbody>
            </table>


           


            </div>

            <div className='col-4'>

            


            
            <div>
            <div className="mb-3">
            <label className="form-label custom-form-label">service Name: </label> 
            <input className="form-control"  type="text" value={serviceName} onChange={(e)=>{setserviceName(e.target.value)}} /> <br /><br />
            </div>
           

            <label className="form-label custom-form-label">service service Description </label>    
            <div className="mb-3" >
            
            <textarea className="form-control" rows="10"  type="text" value={serviceDescription}  onChange={(e)=>{setserviceDescription(e.target.value)}} />
            </div>
           
            <button className="admin-sec-read-btn" onClick={updateserviceCatDetails} >Update service</button>  
            </div>
            </div>
        </div>
       
        

        <div className='row new-btn-wrapper'>
                    <Link to={`/new-service/${serviceMainId}`} className="admin-sec-read-btn">Add New Service</Link>

                   
                    </div>

      </div>
      </>
    );
  }
export default ServiceCatDetails;





