import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';


import './Dashboard.css'



const Dashboard = (props)=>{

       // handle click event of logout button
 /*  const handleLogout = () => {    
      localStorage.clear();
        window.location.href = '/';
  } */

    return(
        <>        
        <Nav />
            {/*  <input type="button" onClick={handleLogout} value="Logout" /> */}
        <div className=' text-center heading-wrapper'>
            <h1 className='main-heading'>CAYAN</h1>
            <p>Oil Company Limited</p>
        </div>
        
        <div>
     
    </div>


           <div className="admin-content">
             
              <NavLink to='/admin-about' className="admin-card">
                 
                    <div className="admin-icon"><i className="fa fa-info f-26"></i></div>
                    <p className="admin-title">About Us</p>
                    <p className="admin-text">Click to see or edit your About page.</p>
                 
              </NavLink>
              
              
              <NavLink to='/admin-careers' className="admin-card">
                 
                    <div className="admin-icon"><i className="fa fa-users f-26"></i></div>
                    <p className="admin-title">Careers</p>
                    <p className="admin-text">Click to see or edit  your Careers page.</p>
                 
              </NavLink>
              <NavLink to='/admin-services' className="admin-card">
                 
                    <div className="admin-icon"><i className="fa fa-database f-26"></i></div>
                    <p className="admin-title">Services</p>
                    <p className="admin-text">Click to see or edit your services page.</p>
                 
              </NavLink>

              <NavLink to='/admin-contact' className="admin-card">
                 
                    <div className="admin-icon"><i className="fa fa-phone f-26"></i></div>
                    <p className="admin-title">Contact Us</p>
                    <p className="admin-text">Click to see or edit your contact page.</p>
                 
              </NavLink>

              <NavLink to='/admin-main-funcs' className="admin-card">
                 
                    <div className="admin-icon"><i className="fa fa-list f-26"></i></div>
                    <p className="admin-title">Main Functions</p>
                    <p className="admin-text">Click to see or edit your main functions.</p>
                 
              </NavLink>
           
        
           
           </div>
        
        
        
        
                  
                    </>
    )
}



export default Dashboard;