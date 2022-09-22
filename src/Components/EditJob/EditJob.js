import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';


import './EditJob.css'

class EditJob extends Component {
 
    render(){
        return(
            <>        
                <Nav pageName="/ Careers/Edit" />

                <div className='container mt-5'>
                    <h3 className="section-title admin-career-section-title">Edit Job</h3> 
                </div>

                <div className='container'>

                    <div className='form-wrapper'>

                    <form>
                    <div className="mb-3">
                        <label htmlFor="job-small-description" className="form-label">Small Description</label>
                        <input type="text" className="form-control" id="job-small-description" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="job-description" className="form-label">Job Description</label>
                        <textarea className="form-control" id="small-description"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="job-requirements" className="form-label">Job Requirements</label>
                        <textarea className="form-control" id="job-requirements"/>
                    </div>
                 
                 
                    <button type="submit" className="admin-sec-read-btn">Save</button>
                    </form>
                    </div>
                </div>

          
            </>



            
        )
    }

}

export default EditJob;
