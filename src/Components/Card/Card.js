import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Card.css'

class Card extends Component {
  render() {
    return (
      <>

<div className="card-container col-lg-4 col-md-6 col-sm-12 col-xs-12">
    <div className="card card-one">
      <div className="content">
        <div className="thumbnail2 t-one">
            <img className='thumbnail2-img' src='assets/pump-jack.svg' alt='cayan-img'/>
        </div>
        
        <h4><Link to="/single-service" className="service-link">{this.props.service_name}</Link></h4>
        <i className="fa fa-handshake"></i>
        <p>{this.props.service_details}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus nunc eu iaculis vestibulum. Fusce purus est, pellentesque in molestie vel, gravida eu lacus.</p>
      </div>
    </div>
  </div>

  
      </>
    )
  }
}

export default Card;
