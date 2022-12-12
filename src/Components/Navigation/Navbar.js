import React, { Component } from 'react';
import axios from '../../axios-data';
import { Link } from 'react-router-dom';

import './Navbar.css'




class Navbar extends Component {

    

    state= {
        mainServicesTexts: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/services')
             .then( res =>{
               
                 
                 const fetchedmainServicesTexts = [];
                 for(let key in res.data){
                     fetchedmainServicesTexts.push({
                        ...res.data[key],
                        id:res.data[key].id
                    })
                 }
                 
                 this.setState({loading:false, mainServicesTexts:fetchedmainServicesTexts})

              //  console.log(this.state.mainServicesTexts)


                 
             })
             .catch(err =>{
                this.setState({loading:false})
             })

             
    }



  render() {


    
    let navItem=[];
    this.state.mainServicesTexts.map((serviceTxt)=>{
        if(!serviceTxt.Services){
            navItem.push(
            <li><Link to="#">{serviceTxt.serviceMainName}</Link></li>
            )
        }else{
            navItem.push(
              <li key={Math.random()}> 
                            
                            <label htmlFor={`drop-${serviceTxt.id}`} className="toggle">{serviceTxt.serviceMainName} </label>
                            <a href="#">{serviceTxt.serviceMainName}</a>
                            <input type="checkbox" id={`drop-${serviceTxt.id}`}/>
                            <ul>
                            {
                                            serviceTxt.Services.map((subServicesTxt)=>(
                                                
                                                <li key={+serviceTxt.id+Math.random()}><a href={`/single-service/${+serviceTxt.id}/${subServicesTxt.id}`}>{subServicesTxt.serviceName}</a></li>
                                               
                                                
                                            ))
                                            }
                              
                            </ul>
                            </li>
           )
        }
    })
  

    return(
        <>
           <div className="header header-fixed">
           <div className="navbar container">

           <div className="logo"><Link to="/"><img className='logo-img' src='/assets/logo.png' alt='cayan-logo-img'/></Link></div>


              
   
   
               <nav>
                    <label htmlFor="drop" className="toggle">&#8801; Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu">
                        <li><a  exact href='/' className="nav-link" >Home</a></li>

                        <li><a   href='/about' className="nav-link" >About US</a></li>

                        
                        <li> 
                        
                       
                     


                        <label htmlFor="drop-200" className="toggle">Services +</label>
                        <a href="#">Services</a>
                        <input type="checkbox" id="drop-200"/>
                        <ul>
                       {navItem}
                        </ul>

                        


                        </li>

                        <li><a   href='/careers' className="nav-link" >Careers</a></li>
                       <li><a   href='/contact' className="nav-link" >Contact Us</a></li>
                    </ul>
                    </nav>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
           </div>
       </div>
   
   
   
             
        </>
       )
      }
    }
    


export default Navbar;