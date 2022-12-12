import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from '../../axios-data';



class CareerIntro extends Component {

  state= {
    careerIntroTexts: [],
    loading: true
}
componentDidMount(){
    axios.get('/career')
         .then( res =>{
           
             
             const fetchedcareerIntroTexts = [];
             for(let key in res.data){
                 fetchedcareerIntroTexts.push({
                    ...res.data[key],
                    id:key
                })
             }
           //  console.log(fetchedcareerIntroTexts)

             
             this.setState({loading:false, careerIntroTexts:fetchedcareerIntroTexts})

            


             
         })
         .catch(err =>{
            this.setState({loading:false})
         })

         
}


  render() {
    let introContext = <Spinner/>

    if(this.state.careerIntroTexts.length!=0){
      introContext = <>
         <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                   <h3 className='career-heading'>A couple things about our team.</h3>
               </div>

               <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <div className="main-text">
                    {/* <h5 className="section-title career-section-title">Customers First</h5>
                    <p className='career-section-p'>If something doesn't work for our contractors using CompanyCam, it doesn't work for us.</p>

                    <h5 className="section-title career-section-title">As a Team</h5>
                    <p className='career-section-p'>We win by working together. Display your talent by running with unique ideas, but resolve together to make CompanyCam the best camera app available.</p>

                    <h5 className="section-title career-section-title">Genuine and real</h5>
                    <p className='career-section-p'>We're straightforward as a team and honest with the customer.</p>

                    <h5 className="section-title career-section-title">Let's Move</h5>
                    <p className='career-section-p'>The best way to see if it works is to see if it works. We're not afraid to learn from trying something new.</p> */}

                    {
                        this.state.careerIntroTexts.map((txt)=>(
                           
                              <div className="row mb-3">
                            <div className="col-sm-1 col-1"> <i className="fa fa-angle-right"></i></div>
                            <div className="col-sm-11 col-11">{txt.detail} </div>
                        </div>
                            
                        ))
                    }
                </div>
               </div>
      </>
    }
    
   

    return (
      <>
         <div className='row'>
              {introContext}
           </div>
      </>
    )
  }
}

export default CareerIntro;
