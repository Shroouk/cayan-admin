import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './Nav.css'

class Nav extends Component {
 
    render(){

        const handleLogout = () => {    
            localStorage.clear();
              window.location.href = '/';
        }

        return(
            <>        
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand" > <Link to="/" className='home-link'>Home</Link> {this.props.pageName} </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       
                    </ul>
                    <input type="button" className='btn btn-light mx-3' onClick={handleLogout} value="Logout" />
                    <img src="./assets/logo.jpg" className='brand-logo' alt='cayan-logo'/>
                    
                    </div>
                </div>
                </nav>



          
            </>



            
        )
    }

}

export default Nav;
