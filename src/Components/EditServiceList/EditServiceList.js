import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useState } from "react";
import Nav from '../Nav/Nav';
import { useParams, withRouter } from "react-router";
import { useNavigate} from 'react-router-dom';


const ServiceList = ()=> {

  const params = useParams();
  const navigate = useNavigate();

    const [serviceList, setserviceList] = useState([])
    const [listTitle, setlistTitle] = useState("");
    const [serviceContent, setserviceContent] = useState([]);

    const [serviceListId,setserviceListId]=useState(null);
   
    const [serviceMainId,setserviceMainId]=useState(params.mainid);
    const [serviceId,setserviceId]=useState(params.id);

    const [message, setMessage] = useState("");



   const listArr = [];

  
    useEffect(() => {
      getserviceList();
    }, [])
    function getserviceList() {
      fetch(`https://backend.mo3ts.com/services/${serviceMainId}/${serviceId}`).then((result) => {
       
        result.json().then((resp) => {
        if(resp.lists.length != 0){

          setserviceList(resp.lists)
          setlistTitle(resp.lists[0].listTitle)
          setserviceListId(resp.lists[0].id)
          setserviceContent(resp.lists[0].content)

        }else{
           navigate(`/new-service-list/${serviceMainId}/${serviceId}`)
        }
         
         
          
          
        })
      })
    }


    const handleFormChange = (index, event) => {
      let data = [...serviceContent];
      data[index] = event.target.value;
      setserviceContent(data);
      
   }

   let contentdata =[];

   const handleFormAdd = (event) => {
     contentdata =[...serviceContent];
   // let contentdata = [...serviceContent];
   
    contentdata[contentdata.length] = "";
    
    contentdata[contentdata.length] = event.target.value;
    contentdata.splice(contentdata.length -2, 1)

    console.log(contentdata.length,contentdata)
   

    

   // setserviceContent(contentdata);
    

    
 }



    const  deleteserviceList = async()=>{
         

      
      if(window.confirm("Are you sure you want to delete this ٍservice section")){
        try {
            let resl = await fetch(`https://backend.mo3ts.com/services/service/list`, {
              method: "DELETE",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization":localStorage.getItem("cayanToken")
              },
              body: JSON.stringify({   
                id: serviceId,
              }),
            });
            let reslJson = await resl.json();
            if (resl.status === 200) {
                
              getserviceList()
            } else {
            }
          } catch (err) {
            console.log(err);
          }
      }
        }



    function selectserviceList(i){
      let item=serviceList[i];
  
          setlistTitle(item.listTitle)
          setserviceListId(item.id)
          setserviceContent(item.content)
    }

    function selectserviceContent(i){
        let item=serviceContent[i];
            
      }


   
 



    let updateserviceList = async (e) => {
      let item={serviceListId,listTitle,serviceContent}
      console.log(item)
      e.preventDefault();
      try {
        let res = await fetch(`https://backend.mo3ts.com/services/service/list`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authorization":localStorage.getItem("cayanToken")
          },
          body:JSON.stringify({
            id:serviceListId,
            listTitle:listTitle,
            content:serviceContent,
            
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setMessage("service list updatedd successfully");
          console.log(resJson)

          getserviceList()
        } else {
          alert("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };



    let handleAddserviceList = async (e) => {
      
      console.log(serviceListId)
      
        //let item={serviceListId,listTitle,serviceContent}
        //console.log(item)
        e.preventDefault();
        try {
          setserviceContent(contentdata);
          let res = await fetch(`https://backend.mo3ts.com/services/service/list`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization":localStorage.getItem("cayanToken")
            },
            body:JSON.stringify({
            //  ServiceId:serviceListId,
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
          }
        } catch (err) {
          console.log(err);
        }
      };

     



    return (

        <>

<Nav pageName="/ service" />

        <div className='container mt-5'>
                    <h3 className="section-listTitle admin-career-section-listTitle">Update Service List Data  </h3> 
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
                        <th scope="col">listTitle</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
            <tbody>
                
                {
                  serviceList.map((item, i) =>
                    <tr key={i}>
                    <td>{i}</td>
                    <td>{item.listTitle}</td>
                    <td>
                        
                        <button className="btn btn-primary edit-btn" onClick={() => selectserviceList(i)}>Update</button>
                        <button className="btn btn-danger delete-btn" onClick={() => deleteserviceList(i)}>Delete</button> 
                       
                        
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
            <input className="form-control"  type="text" value={listTitle} onChange={(e)=>{setlistTitle(e.target.value)}} /> <br /><br />
            </div>
           

            <label className="form-label custom-form-label">service service Description </label>    

            {
                
              serviceContent.map((item, i)=>
                (
                    <div className="mb-3" key={i}>
            
                    <input className="form-control" name="content"   type="text" value={item}  onChange={(e)=>handleFormChange(i,e)} />
                    </div>

                ))
            }
        {/*     <div className="mb-3" >
            
            <textarea className="form-control" rows="10"  type="text" value={serviceContent}  onChange={(e)=>{setserviceContent(e.target.value)}} />
            </div> */}
           
            <button className="admin-sec-read-btn" onClick={updateserviceList} >Update service List</button>  
            </div>





            <div className='containerr mt-5' >

            <div className='row new-btn-wrapper'>
            {/* <Link to={`/new-service/${serviceMainId}`} className="admin-sec-read-btn">Add New Service</Link> */}
            <h3 className="section-listTitle admin-career-section-listTitle">Add New Service List Data  </h3> 
           
            </div>

            <div className='form-wrapper'>

                <form onSubmit={handleAddserviceList}>
                <div className="mb-3">
                    <label htmlFor="serviceName" className="form-label">Service Name</label>
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
export default ServiceList;





