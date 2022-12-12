import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import Spinner from '../Spinner/Spinner';
import Header from '../Header/Header';
import './SingleService.css'


const SingleService = (props) => {
	const params = useParams();
	const [SingleService, setSingleService] = useState({});



const editURL = (pathString)=>{
   
            let slashPathString=pathString.replace("images/","images//");
            return slashPathString
}


	//console.log(params);
	useEffect(() => {
		async function fetchData() {
			const res = await axios(
				`https://backend.mo3ts.com/services/${params.service_id}/${params.id}`
			);
			
			setSingleService(res.data);
           // setSingleServicesBenefits(res.data.ServicesBenefits)

            console.log(res.data.ServicesBenefits)
            console.log(SingleService)
		}
		fetchData();

       
	}, [params.id]); 




    let aboutUsContent =  Object.keys(SingleService).length === 0 ?  <Spinner/> : <>
    <div className='container details-wrapper'>
      
      
  
      {/* <MainFunction/> */}
      <div className='row mt-5'>

      <div className="col-sm-2 col-lg-3 thumbnail-wrapper">
      <div className="thumbnail3 t-one">
          <img className='thumbnail2-img' src='/assets/pump-jack.svg' alt="cayan-service"/>
      </div>
      
      </div>

      <div className="col-sm-10 col-lg-9">

      <div className="main-text">
              <h3 className="section-title">{SingleService.serviceName}</h3>
              <p>
                  {SingleService.serviceDescription}
              </p>
            
             
          </div>

      </div>

  
      </div>



      <div className='row mt-5'>


      <div className="col-sm-12 col-lg-6">

<div className="main-text">
        {/* <ContactInfo/> */}

        <div className="row mt-5">
        {!SingleService.images ||
    <>
      {
          
          SingleService.images.map((image)=>(

            

          
        
           <div className="row justify-content-center mb-5" key={image}><img className="service-img" src={editURL(`https://backend.mo3ts.com/services/${image.image}`)} alt="cayan-service-img" /></div>
            
        ))
      }
    </>
  }
            
        
        
        </div>
    
    
    </div>

</div>



          <div className="col-sm-12 col-lg-6 ">
          <div className="main-text">
              <div className="we-do-sec">
             


                  <div>
 
  {!SingleService.lists ||
    <>
      {
          SingleService.lists.map((list)=>(
           
            <div className="mb-5" key={Math.random()}>
            <div className="row"> <h3 className="section-title single-do-sec">{list.listTitle}</h3></div>

            {
                list.content.map((bnft)=>(
                    <>
                    <div className="row mb-3" key={Math.random()}>
                            <div className="col-sm-1 col-1"> <i className="fa fa-check single-check"></i> </div>
                            <div className="col-sm-10 col-10">{bnft} </div>
                        </div> 

                    </>
                ))
            }
           </div>
            
        ))
      }
    </>
  }
</div>          
     


                  

              </div>
                 
              
              
              </div>
          </div>

       


          </div>


     
      </div>
    </>
    
    

	return (
        
       

        <>
        <Header page={SingleService.serviceName}/>

        {aboutUsContent}
          
  
        </>

	
	);
};

export default SingleService;