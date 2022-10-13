import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useState } from "react";
import Nav from '../Nav/Nav';
import { useParams, withRouter } from "react-router";
import { useNavigate} from 'react-router-dom';


const NewServiceList = ()=> {

  const params = useParams();
  const navigate = useNavigate();

    const [serviceList, setserviceList] = useState([])
    const [listTitle, setlistTitle] = useState("");
    const [serviceContent, setserviceContent] = useState([]);

    const [serviceListId,setserviceListId]=useState(null);
   
    const [serviceMainId,setserviceMainId]=useState(params.mainid);
    const [serviceId,setserviceId]=useState(params.id);

    const [message, setMessage] = useState("");



  

   let contentdata =[];

   const handleFormAdd = (event) => {
     contentdata =[...serviceContent];
   // let contentdata = [...serviceContent];
   
    contentdata[contentdata.length] = "";
    
    contentdata[contentdata.length] = event.target.value;
    contentdata.splice(contentdata.length -2, 1)

   // console.log(contentdata.length,contentdata)
   

    

   // setserviceContent(contentdata);
    

    
 }










   
 



    let updateserviceList = async (e) => {
      let item={serviceId,listTitle,serviceContent}
     // console.log(item)
      e.preventDefault();
      try {
        let res = await fetch(`https://backend.mo3ts.com/services/service/list`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization":localStorage.getItem("cayanToken")
          },
          body:JSON.stringify({
            ServiceId:serviceId,
            listTitle:listTitle,
            content:serviceContent,
            
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setMessage("service list updatedd successfully");
          console.log(resJson)

         
          setTimeout(()=>{setMessage("")}, 3000);
          setTimeout(
            () => navigate(`/edit-service-list/${serviceMainId}/${serviceId}`), 
            5000
          );

        } else {
          alert("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };



    let handleAddserviceList = async (e) => {
      
      console.log(serviceId)
      
        //let item={serviceListId,listTitle,serviceContent}
        //console.log(item)
        e.preventDefault();
        try {
          setserviceContent(contentdata);
        /*   let res = await fetch(`https://backend.mo3ts.com/services/service/list`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":localStorage.getItem("cayanToken")
            },
            body:JSON.stringify({
            
              ServiceId:serviceId,
              listTitle:listTitle,
              content:contentdata,
              
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setMessage("service list added successfully");
            console.log(resJson)
  
            getserviceList()
          } else {
            alert("Some error occured");
          } */
        } catch (err) {
          console.log(err);
        }
      };

     



    return (

        <>

<Nav pageName="/ service List" />

        <div className='container my-5'>

        <div className='row'>
                      {message ?    <div className="alert alert-info alert-dismissible fade show" role="alert">
                      {<p>{message}</p> }
                       
                      </div> : null}
          </div>


                  <div className='row'>
                    <div className='col-8'>
                    <h3 className="section-listTitle section-title admin-career-section-listTitle">Update Service List Data  </h3> 
                    </div>
                    <div className='col-4 text-center'>
                    <button className="admin-sec-read-btn save-btn" onClick={updateserviceList} >Save Changes</button>  
                    </div>
                  </div>
                   
                </div>
      <div className="container">
         

          

        <div className='row'>
    

            <div className=''>

            


            
            <div>
            <div className="mb-3">
            <label className="form-label custom-form-label">List Title: </label> 
            <input className="form-control"  type="text" value={listTitle} onChange={(e)=>{setlistTitle(e.target.value)}} /> <br /><br />
            </div>
           

            </div>





            <div className='containerr mt-5' >

            <div className='row new-btn-wrapper'>
            {/* <Link to={`/new-service/${serviceMainId}`} className="admin-sec-read-btn">Add New Service</Link> */}
            <h3 className="section-listTitle admin-career-section-listTitle">Add New Service List Data  </h3> 
           
            </div>

            <div className='form-wrapper'>

                <form onSubmit={handleAddserviceList}>
                <div className="mb-3">
                    {/* <label htmlFor="serviceName" className="form-label">Service Name</label> */}
                    <input 
                    type="text" 
                    required
                    className="form-control" 
                    id="serviceName" 
                    
                    placeholder="Enter new Service list"
                    onChange={(e) => handleFormAdd(e)}
                  //  onBlur={(e) => setserviceContent(oldContent => [...oldContent, e.target.value])}    
                    />

                
                </div>
           



                <button type="submit" className="admin-sec-read-btn">Add</button>



                </form>
             </div>
            </div>    
            </div>
        </div>
       
        
  

      </div>
      </>
    );
  }
export default NewServiceList;





