import React, { Component } from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import Header from '../Header/Header';
import './ContactUs.css'

class ContactUs extends Component {

	

  render() {
	
    return (
      <>
      <Header page="Contact Us"/>

      <div className='container p-5'>
        <div className='row'>
          <div className='col-12 col-md-6 '>
            <ContactInfo/>
          </div>

          <div className='col-12 col-md-6 '>
          <div className='row contactus-wrapper'>
          <h3 className="section-title">Get In Touch</h3>
          </div>

          <form id="contact-form" className=" " action="https://formsubmit.co/shrouksaad5@gmail.com" method="POST">
						
						<div className="form-group">
						  <label className="control-label" htmlFor="contact-name">Name</label>
						  <div className="controls">
							<input id="contact-name" name="contactName" placeholder="Your name" className="form-control requiredField" data-new-placeholder="Your name" type="text" data-error-empty="Please enter your name" />
							<i className="fa fa-user"></i>
						  </div>
						</div>
						
						<div className="form-group">
						  <label className="control-label" htmlFor="contact-mail">Email</label>
						  <div className=" controls">
							<input id="contact-mail" name="email" placeholder="Your email" className="form-control requiredField" data-new-placeholder="Your email" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address"/>
							<i className="fa fa-envelope"></i>
						  </div>
						</div>
						
						<div className="form-group">
						  <label className="control-label" htmlFor="contact-message">Message</label>
							<div className="controls">
								<textarea id="contact-message" name="comments"  placeholder="Your message" className="form-control requiredField" data-new-placeholder="Your message" rows="6" data-error-empty="Please enter your message"></textarea>
								<i className="fa fa-comment"></i>
							</div>
						</div>
						
						<p><button name="submit" type="submit" className="btn-color2 btn-block read-btn" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent"><i className="fa fa-paper-plane"></i>Send Message</button></p>
						<input type="hidden"  name="submitted" id="submitted" value="true" />
						
					</form>

          </div>
        </div>
      </div>
      </>
    )
  }
}

export default ContactUs;
