import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';

import axios from '../../axios-data';

import Header from '../Header/Header';
import './AboutUs.css';
import MainFunction from '../MainFunction/MainFunction';

class AboutUs extends Component {

state= {
  aboutTexts: [],
  loading: true,
  error:false
}
componentDidMount(){
  axios.get('/aboutUs')
       .then( res =>{
           const fetchedaboutTexts = [];
           for(let key in res.data){
               fetchedaboutTexts.push({
                   ...res.data[key],
                   id:key
              })
           }
           //console.log(fetchedaboutTexts);

       

           this.setState({loading:false, aboutTexts:fetchedaboutTexts})
       })
       .catch(err =>{
          this.setState({loading:false});
          this.setState({error:true})
       })
}


  render() {


    let aboutUsContent =  <Spinner/>
 
//console.log(this.state.aboutTexts)

    if(this.state.aboutTexts.length!=0){
      aboutUsContent  =  <>
 
                      <main className="main-grid2">
            <div className="head">
            <h2 className="page-title">About Us</h2>

            <p className="subtitle">CAYAN Petroleum Services Company is a regional leader with professional experience in providing the oil and gas industry with a wide range of oilfield services.</p>
            </div>
           

             <div className="row">
               <div className="col-12 col-md-4">
                 <div className='row'> <img className="about-main-image" alt='cayan-about-us-image' src="/assets/about.jpg"/> </div>
                 <div className='row justify-content-center'>  <img className="about-Sahm-Belady-image" alt='Sahm-Belady-image' src="/assets/Sahm-Belady.png"/> </div>
               
              
               </div>
               <div className="col-12 col-md-8">
               {
                this.state.aboutTexts.map((txt) => ( 
                <div key = { txt.id } className="about-contenet-wrapper">
                   <h2 className="section-title">{txt.title}</h2>
                  
                   {/* {txt.AboutUs_Contents.map((aboutcontent)=>(
                     
                     <p>{aboutcontent.detail}</p>
                   ))} */}
                    <p className='about-content'>{txt.content} </p> 
                    </div>
                ))
            }
               </div>
             </div>
     {/*  <MoreAbout/> */}

      <MainFunction/>
    </main>
                      </>
      
      
    }
    return (
      <>
      <Header page="About Us"/>


{aboutUsContent}
      

      </>
    )
  }
}

export default AboutUs;
