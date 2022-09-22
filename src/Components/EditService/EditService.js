import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';


import './EditService.css'

class EditService extends Component {
 
    render(){
        return(
            <>        
                <Nav pageName="Services/Edit" />

                <div className='container mt-5'>
                    <h3 className="section-title admin-career-section-title">Edit Service</h3> 
                </div>

                <div className='container'>

                    <div className='form-wrapper'>

                    <form>
                    <div className="mb-3">
                        <label htmlFor="service-small-description" className="form-label">Small Description</label>
                        <input type="text" className="form-control" id="service-small-description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="service-description" className="form-label">Service Description</label>
                        <textarea className="form-control" id="small-description"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="service-requirements" className="form-label">What We Do</label>
                        <textarea className="form-control" id="service-requirements"/>
                    </div>
                 
                 
                    <button type="submit" className="admin-sec-read-btn">Save</button>
                    </form>
                    </div>
                </div>

          
            </>



            
        )
    }

}

export default EditService;
