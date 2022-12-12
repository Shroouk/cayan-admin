import React, { Component } from 'react';

import axios from '../../axios-data';


class MoreAbout extends Component {

state= {
  moreTexts: [],
  loading: true,
  error:false
}
componentDidMount(){
  axios.get('/more/1')
       .then( res =>{
           const fetchedmoreTexts = [];
         
               fetchedmoreTexts.push({
                   ...res.data
              })
           
           console.log(fetchedmoreTexts);

       

           this.setState({loading:false, moreTexts:fetchedmoreTexts})
       })
       .catch(err =>{
          this.setState({loading:false});
          this.setState({error:true})
       })
}


  render() {


    return (
      <>
      
      {
          this.state.moreTexts.map((txt)=>(
              <>
               <div className="head">
            <h2 className="page-title">{txt.title}</h2>

            <p className="subtitle">{txt.MoreContents.map((subtxt)=><><p>{subtxt.detail}</p></>)}</p>
            </div>
              </>
          ))
      }
        

      </>
    )
  }
}

export default MoreAbout;
