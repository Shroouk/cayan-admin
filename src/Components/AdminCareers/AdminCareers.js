import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios-data';

import Nav from '../Nav/Nav';
import Spinner from '../Spinner/Spinner';


import './AdminCareers.css'

class AdminCareers extends Component {

    
    state= {
        careersTexts: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/career/vacancies')
             .then( res =>{
               
                 
                 const fetchedcareersTexts = [];
                 for(let key in res.data){
                     fetchedcareersTexts.push({
                        ...res.data[key],
                        id:key
                    })
                 }
              //   console.log(fetchedcareersTexts)
    
                 
                 this.setState({loading:false, careersTexts:fetchedcareersTexts})
    
                
    
    
                 
             })
             .catch(err =>{
                this.setState({loading:false})
             })
    
             
    }

    

    render(){


        let careerTxtContent = <Spinner/>

    if(this.state.careersTexts.length!=0){
      careerTxtContent  =  <>
 
 <div className='container'>
                <table className="table table-dark table-hover ">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">Small Description</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>


  { 
   this.state.careersTexts.reverse().map((careerTxt)=>(
       <>
       
       <tr>
                        <th scope="row">{careerTxt.id}</th>
                        <td>{careerTxt.title}</td>
                        <td ><p className='td-des'> { Math.ceil(Math.abs(new Date(careerTxt.updatedAt) - new Date()) / (1000 * 60 * 60 * 24))} day ago</p></td>
                        <td className='td-action'><Link to="/edit-job"  className="btn btn-primary edit-btn">Edit</Link>
                            <button  className="btn btn-danger delete-btn">Delete</button>
                        </td>
                        </tr>

       </>
   ))

}
	
    
	
	
</tbody>
                    </table>



                    <div className='row new-btn-wrapper'>
                    <Link to="/new-service" className="admin-sec-read-btn">Add New Job</Link>
                    </div>
                </div>

                      </>
      
      
    }



        return(
            <>        
                <Nav pageName="/ Careers"/>

                <div className='container mt-5'>
                    <h3 className="section-title admin-career-section-title">All Our Opening Jobs</h3> 
                </div>

              
                        {careerTxtContent}
                       
                 


          
            </>



            
        )
    }

}

export default AdminCareers;
