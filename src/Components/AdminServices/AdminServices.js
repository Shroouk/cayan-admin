import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Spinner from '../Spinner/Spinner';
import axios from '../../axios-data';




import './AdminServices.css'
import AdminMainFunctions from '../AdminMainFunctions/AdminMainFunctions';

class AdminServices extends Component {
    state= {
        servicesTexts: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/services')
             .then( res =>{
               
                 
                 const fetchedservicesTexts = [];
                 for(let key in res.data){
                     fetchedservicesTexts.push({
                        ...res.data[key],
                        id:key
                    })
                 }
               //  console.log(fetchedservicesTexts)
    
                 
                 this.setState({loading:false, servicesTexts:fetchedservicesTexts})
    
                
    
    
                 
             })
             .catch(err =>{
                this.setState({loading:false})
             })
    
             
    }

 
    render(){


        let serviceTxtContent = <Spinner/>

    if(this.state.servicesTexts.length!=0){
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
   this.state.servicesTexts.reverse().map((serviceTxt)=>(
       <>
                                <tr key={serviceTxt.id}>
                                <th scope="row" >{serviceTxt.id}</th>
                                <td>{serviceTxt.serviceMainName}</td>
                                {/* <td ><p className='td-des'>{serviceTxt.serviceMainName}</p></td> */}
                                <td className='td-action'><Link to="/edit-service"  className="btn btn-primary edit-btn">Edit</Link>
                                    <button  className="btn btn-danger delete-btn">Delete</button>
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
                    <h3 className="section-title admin-career-section-title">All Our services</h3> 
                </div>

               

                       
                               

                             {serviceTxtContent}

                           
                        
                       
                 


          
            </>



            
        )
    }

}

export default AdminServices;
