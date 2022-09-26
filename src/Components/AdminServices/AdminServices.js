/* import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Spinner from '../Spinner/Spinner';
import axios from '../../axios-data';




import './AdminServices.css'
import AdminMainFunctions from '../AdminMainFunctions/AdminMainFunctions';

class AdminServices extends Component {
    state= {
        serviceCatTexts: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/services')
             .then( res =>{
               
                 
                 const fetchedserviceCatTexts = [];
                 for(let key in res.data){
                     fetchedserviceCatTexts.push({
                        ...res.data[key],
                        id:key
                    })
                 }
    
                 
                 this.setState({loading:false, serviceCatTexts:fetchedserviceCatTexts})
    
                
    
    
                 
             })
             .catch(err =>{
                this.setState({loading:false})
             })
    
             
    }

 
    render(){



        
        const deleteFuncCat = async(id,e)=>{
         

      
            if(window.confirm("Are you sure you want to delete this service category")){
              try {
                  let resl = await fetch("https://backend.mo3ts.com/services/category", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization":localStorage.getItem("cayanToken")
                    },
                    body: JSON.stringify([{   
                      id: id,
                    }]),
                  });
                  let reslJson = await resl.json();
                  if (resl.status === 200) {
                      
                    
                  const serviceCatTexts = this.state.serviceCatTexts.filter(item => item.id !== id);  
                  this.setState({ serviceCatTexts }); 
                  } else {
                  }
                } catch (err) {
                  console.log(err);
                }
            }
              }



        let serviceTxtContent = <Spinner/>

    if(this.state.serviceCatTexts.length!=0){
      serviceTxtContent  =  <>
 
 <div className='container'>
                <table className="table table-dark table-hover ">

                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">service Title</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>


  { 
   this.state.serviceCatTexts.reverse().map((serviceTxt)=>(
       <>
                                <tr key={serviceTxt.id}>
                                <th scope="row" >{serviceTxt.id}</th>
                                <td>{serviceTxt.serviceMainName}</td>
                               
                                <td className='td-action'>

                                    <Link to={`/edit-service/${+serviceTxt.id}/${serviceTxt.func}`}  className="btn btn-primary edit-btn">Edit</Link>
                                    <button  className="btn btn-danger delete-btn" onClick={()=>{deleteFuncCat(serviceTxt.id)}}>Delete</button>
                                </td>
                                </tr>
        
       </>
   ))

}
	
    
	
	
</tbody>
                    </table>



                    <div className='row new-btn-wrapper'>
                    <Link to="/new-job" className="admin-sec-read-btn">Add New Service</Link>
                    </div>
                </div>
                      </>
      
      
    }

        
        return(
            <>        
                <Nav pageName="/ Services"  />
                
                <div className='container mt-5'>
                    <h3 className="section-title admin-career-section-title">All Our services Categories</h3> 
                </div>

               

                       
                               

                             {serviceTxtContent}

                           
                        
                       
                 


          
            </>



            
        )
    }

}

export default AdminServices;
 */





import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import axios from '../../axios-data';

import Nav from '../Nav/Nav';


class AdminServices extends Component {
    state= {
        serviceCatTexts: [],
        loading: true
    }

   
    componentDidMount(){
        axios.get('/services')
             .then( res =>{
               
                 
                 const fetchedserviceCatTexts = [];
                 for(let key in res.data){
                     fetchedserviceCatTexts.push({
                        ...res.data[key],
                        index:key
                    })
                 }
                
    
                 
                 this.setState({loading:false, serviceCatTexts:fetchedserviceCatTexts})
    
                
    
    
                 
             })
             .catch(err =>{
                this.setState({loading:false})
             })
    
             
    }

 
    render(){


        

        const deleteserviceCatTexts = async(id,e)=>{
         

      
      if(window.confirm("Are you sure you want to delete this main function")){
        try {
            let resl = await fetch("https://backend.mo3ts.com/services/category", {
              method: "DELETE",
              headers: {
                  "Content-Type": "application/json",
                  //"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTQ1MjUzMzksImV4cCI6MTY1NDUzMjUzOX0.sJNNiYuS8FqioZZ-uCVrT4I0rPuphVn6p2uptUaHFPw"
                  "Authorization":localStorage.getItem("cayanToken")
              },
              body: JSON.stringify({   
                id: id,
              }),
            });
            let reslJson = await resl.json();
            if (resl.status === 200) {
                
              
              const serviceCatTexts = this.state.serviceCatTexts.filter(item => item.id !== id);  
            this.setState({ serviceCatTexts }); 
            } else {
            }
          } catch (err) {
            console.log(err);
          }
      }
        }


   




        let mainFuncTxtContent = <Spinner/>

    if(this.state.serviceCatTexts.length!=0){
      mainFuncTxtContent  =  <>
 
 <div className='container'>
                <table className="table table-dark table-hover ">

                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Service Category</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>


  { 
   this.state.serviceCatTexts.reverse().map((serviceCategoryTxt)=>(
       <>
                                <tr key={serviceCategoryTxt.id}>
                                <th scope="row" >{serviceCategoryTxt.index}</th>
                                <td >{serviceCategoryTxt.serviceMainName}</td>
                                
                                <td className='td-action'>
                                   
                                    <Link to={`/edit-servicecat/${+serviceCategoryTxt.id}/${serviceCategoryTxt.serviceMainName}`}  className="btn btn-primary edit-btn">Edit</Link>
                                    <button  className="btn btn-danger delete-btn" onClick={()=>{deleteserviceCatTexts(serviceCategoryTxt.id)}}>Delete</button>
                                </td>
                                </tr>
        
       </>
   ))

}
	
    
	
	
</tbody>
                    </table>

                    

                    
                </div>
                      </>
      
      
    }

        
        return(
            <>        
                 <Nav pageName="/  Service Category"  />

                <div className='container mt-5'>
                    <h3 className="section-title admin-career-section-title">The Service Categories of Cayan</h3> 
                </div>

               

                       
                               

                             {mainFuncTxtContent}

                           
                             <div className='row new-btn-wrapper'>
                    <Link to="/new-service-category" className="admin-sec-read-btn">Add New Service Category</Link>

                   
                    </div>
                       


                       
                 


          
            </>



            
        )
    }

}

export default AdminServices;
