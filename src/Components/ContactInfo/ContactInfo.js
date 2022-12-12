import React, { Component } from 'react';
import axios from '../../axios-data';


import './ContactInfo.css';




class ContactInfo extends Component {



    state= {
        contactTexts: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/contactUs')
             .then( res =>{
               
                 
                 const fetchedcontactTexts = [];
                 for(let key in res.data){
                     fetchedcontactTexts.push({
                        ...res.data[key],
                        id:key
                    })
                 }
                 
                 this.setState({loading:false, contactTexts:fetchedcontactTexts})

                


                 
             })
             .catch(err =>{
                this.setState({loading:false})
             })

             //console.log(this.state.contactTexts)
             
    }



  render() {
    /* const { DataisLoaded, contactTexts } = this.state; */

  

    return (


       
        
        <>
             <div className="content address">
                                <h3 className="section-title">Talk to us</h3>


                                <p>Whether you have a question, want to start a project or simply want to connect. <br/>Feel free to send me a message in the contact form</p>



                                {
                                this.state.contactTexts.map((contacttxt)=>(
                                    
                                        <address key = { contacttxt.id }>
                                            <div>
                                                <div className="box-icon">
                                                <i className="fa fa-map"></i>
                                                </div>
                                                <p>
                                                <span className='txt-m-r info-span'>Address: </span>
                                                <span>{contacttxt.address}</span>
                                                </p>
                                            </div>
                                            
                                            <div>
                                                <div className="box-icon">
                                                <i className="fa fa-at"></i>
                                                </div>
                                                <p>
                                                <span className='txt-m-r info-span'>E-mail: </span>
                                                <span>{contacttxt.email}</span>
                                                </p>
                                            </div>
                                            
                                            <div>
                                                <div className="box-icon">
                                                <i className="fa fa-phone"></i>
                                                </div>
                                                <p>
                                                <span className='txt-m-r info-span'>Phone: </span>
                                                <span>{contacttxt.phone}</span>
                                                </p>
                                            </div>                                  
                                        </address>
                                        
                                ))
                                }


                            
                            </div>
        </>
        )
      }
    }
    


export default ContactInfo;