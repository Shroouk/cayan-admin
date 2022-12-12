import React, { Component } from 'react';
import axios from '../../axios-data';
import CareerIntro from '../CareerIntro/CareerIntro';
import Header from '../Header/Header';
import JobCard from '../JobCard/JobCard';
import './Careers.css'

class Careers extends Component {

  state= {
    careersTexts: [],
    loading: true
}
componentDidMount(){
    axios.get('/career/vacancies')
         .then( res =>{
           
             
             const fetchedcareersTexts = [];
             for(let key in res.data){
                 fetchedcareersTexts.push({
                    ...res.data[key],
                //    id:key
                })
             }
             console.log(fetchedcareersTexts)

             
             this.setState({loading:false, careersTexts:fetchedcareersTexts})

            


             
         })
         .catch(err =>{
            this.setState({loading:false})
         })

         
}


  render() {
    
    let careerTxtContent = <>
    <main className="container career-wrapper">
           
           <CareerIntro/>
           <div className='container p-5'>
     <div className='row mt-5'>
      <p className='career-p'>We are pleased to welcome any person who sees in himself the technical skills that makes him an added value to our success.</p>
     </div>
     <div className='row'>
      <h2 className="section-title sub">Join Our Family: </h2>

      <div>
          <h5>And Send Your CV to <em className='cayan-mail'>cayan@cayan-co.com</em></h5>
      </div> 
      </div>
     </div>
         

         
       </main>
     
    </>

    if(this.state.careersTexts.length!=0){
      careerTxtContent  =  <>
 
 <main className="container career-wrapper">
           
        <CareerIntro/>

      
<div className="job-listings">
	
	<div className="listing-title page-title">Current Openings</div>


  { 
   this.state.careersTexts.reverse().map((careerTxt)=>(
       <>
       <JobCard careerId={careerTxt.id} careerTitle={careerTxt.title} careerYears={careerTxt.experienceInYears} careerLevel={careerTxt.careerLevel} careerAt={careerTxt.updatedAt}/>
       
        
       </>
   ))

}
	
    
	
	
    </div>
      
    </main>

                      </>
      
      
    }

    return (
      <>
      <Header page="Careers"/>

      { careerTxtContent}

      </>
    )
  }
}

export default Careers;
