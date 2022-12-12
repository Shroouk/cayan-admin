import React, { Component } from 'react'
import Card from '../Card/Card';
import Header from '../Header/Header';

import axios from '../../axios-data';

import './Services.css'

class Services extends Component {


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
             console.log(fetchedservicesTexts)

             
             this.setState({loading:false, servicesTexts:fetchedservicesTexts})

            


             
         })
         .catch(err =>{
            this.setState({loading:false})
         })

         
}




  render() {
    return (
      <>
      <Header page="Services"/>

      <div className='container services-container'>

      <div className='row'>

          <div className='isotope-item service-loop-item3 text-center col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div className='row service-item vertical-item'>
              <div className='item-media rounded p-0 item1'>
                  <img src='assets/services-img1.jpg' alt='services-img'/>
                  <div className="media-links">
				    <a className="abs-link" href="#"></a>
			      </div>
              </div>
              </div>
              <div className='row service-content'>
              <div className="item-content rounded box-shadow2 ls mt-15">
		        <h6 className="service-title mb-20 mb-lg-30">
			    <span>Well Head Maintenance</span>
		        </h6>
	          </div>
              </div>
          </div>

          <div className='isotope-item service-loop-item3 text-center col-lg-4 col-md-6 col-sm-12 col-xs-12'>
          <div className='row service-content'>
              <div className="item-content rounded box-shadow2 ls mb-15">
		        <h6 className="service-title mb-20 mb-lg-30">
			    <span>Iron Management</span>
		        </h6>
	          </div>
              </div>

              <div className='row service-item vertical-item'>
              <div className='item-media rounded p-0 item2'>
                  <img src='assets/services-img2.jpg' alt='services-img'/>
                  <div className="media-links">
				    <a className="abs-link" href="#"></a>
			      </div>
              </div>
              </div>
             
          </div>

          <div className='isotope-item service-loop-item3 text-center col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <div className='row service-item vertical-item'>
              <div className='item-media rounded p-0 item3'>
                  <img src='assets/services-img3.jpg' alt='services-img'/>
                  <div className="media-links">
				    <a className="abs-link" href="#"></a>
			      </div>
              </div>
              </div>
              <div className='row service-content'>
              <div className="item-content rounded box-shadow2 ls mt-15">
		        <h6 className="service-title mb-20 mb-lg-30">
			    <span>Pipelines Process Services</span>
		        </h6>
	          </div>
              </div>
          </div>

      </div>










      <div className='row'>

<div className='isotope-item service-loop-item3 text-center col-lg-4 col-md-6 col-sm-12 col-xs-12'>
<div className='row service-content'>
    <div className="item-content rounded box-shadow2 ls mb-15 mt-15">
      <h6 className="service-title mb-20 mb-lg-30">
      <span>Wireline Services</span>
      </h6>
    </div>
    </div>

    <div className='row service-item vertical-item'>
    <div className='item-media rounded p-0 item4'>
        <img src='assets/services-img4.jpg' alt='services-img'/>
        <div className="media-links">
          <a className="abs-link" href="#"></a>
        </div>
    </div>
    </div>
  
</div>

<div className='isotope-item service-loop-item3 text-center col-lg-4 col-md-6 col-sm-12 col-xs-12'>


    <div className='row service-item vertical-item mt-15'>
    <div className='item-media rounded p-0 item5'>
        <img src='assets/services-img5.jpg' alt='services-img'/>
        <div className="media-links">
          <a className="abs-link" href="#"></a>
        </div>
    </div>
    </div>

    <div className='row service-content'>
    <div className="item-content rounded box-shadow2 ls mt-15">
      <h6 className="service-title mb-20 mb-lg-30 ">
      <span>Stimulation & Pumping Services</span>
      </h6>
    </div>
    </div>
   
</div>

<div className='isotope-item service-loop-item3 text-center col-lg-4 col-md-6 col-sm-12 col-xs-12'>
<div className='row service-content'>
    <div className="item-content rounded box-shadow2 ls mb-15 mt-15">
      <h6 className="service-title mb-20 mb-lg-30">
      <span>Tubular Running Services</span>
      </h6>
    </div>
    </div>
     
    <div className='row service-item vertical-item'>
    <div className='item-media rounded p-0 item6'>
        <img src='assets/services-img6.jpg' alt='services-img'/>
        <div className="media-links">
          <a className="abs-link" href="#"></a>
        </div>
    </div>
    </div>
   
</div>

</div>

      </div>  










      <section>
      <div className="head">
            <h2 className="page-title">Our Services</h2>

            <p className="subtitle">CAYAN Petroleum Services Company is a regional leader with professional experience in providing the oil and gas industry with a wide range of oilfield services.</p>
            </div>
         

          <div className='container mt-5'>
          <div className="wrapper row service-wrapper">
            <Card service_name="service 1" service_details="consectetur adipiscing elit. Praesent finibus nunc eu iaculis vestibulum. Fusce purus est, pellentesque in molestie vel"/>
            <Card service_name="service 2" service_details="consectetur adipiscing elit. Praesent finibus nunc eu iaculis vestibulum. Fusce purus est, pellentesque in molestie vel"/>
            <Card service_name="service 1" service_details="consectetur adipiscing elit. Praesent finibus nunc eu iaculis vestibulum. Fusce purus est, pellentesque in molestie vel"/>
            <Card service_name="service 3" service_details="consectetur adipiscing elit. Praesent finibus nunc eu iaculis vestibulum. Fusce purus est, pellentesque in molestie vel"/>
            <Card service_name="service 5" service_details="consectetur adipiscing elit. Praesent finibus nunc eu iaculis vestibulum. Fusce purus est, pellentesque in molestie vel"/>
            <Card service_name="service 5" service_details="consectetur adipiscing elit. Praesent finibus nunc eu iaculis vestibulum. Fusce purus est, pellentesque in molestie vel"/>
            
            </div>    
          </div>         
     
        </section>

      
      </>
    )
  }
}

export default Services;
