import React, { Component } from 'react';
import axios from '../../axios-data';


import './MainFunction.css';




class MainFunction extends Component {




    state= {
        mainFuncTexts: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/services/mainFunctions')
             .then( res =>{
               
                 
                 const fetchedmainFuncTexts = [];
                 for(let key in res.data){
                     fetchedmainFuncTexts.push({
                        ...res.data[key],
                        id:key
                    })
                 }
                 
                 this.setState({loading:false, mainFuncTexts:fetchedmainFuncTexts})

                


                 
             })
             .catch(err =>{
                this.setState({loading:false})
             })

             //console.log(this.state.mainFuncTexts)
             
    }



  render() {

  

    return (


       
        
        <>



<section id="timeline">
    <div className='row text-center'>
    <h3 className="page-title timeline-title">The main function of Cayan is to provide the following services. </h3>
    </div>

<div className="demo-card-wrapper">


{ 
   this.state.mainFuncTexts.map((mainTxt)=>(
       
        <div className="demo-card demo-card--step1">
        <div className="timeline-head">
            <div className="number-box">
                <span>{/* {+mainTxt.id +1} */} </span>
            </div>
            <p>{mainTxt.func}</p>
        </div>
        </div>
       
   ))

}


  

</div>
</section>
            
        </>
        )
      }
    }
    


export default MainFunction;