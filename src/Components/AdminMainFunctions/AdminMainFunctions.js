import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import axios from '../../axios-data';

import Nav from '../Nav/Nav';


class AdminMainFunctions extends Component {
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
                        index:key
                    })
                 }
                
    
                 
                 this.setState({loading:false, mainFuncTexts:fetchedmainFuncTexts})
    
                
    
    
                 
             })
             .catch(err =>{
                this.setState({loading:false})
             })
    
             
    }

 
    render(){


        

        const deleteMainFunc = async(id,e)=>{
         

      
      if(window.confirm("Are you sure you want to delete this main function")){
        try {
            let resl = await fetch("https://backend.mo3ts.com/services/mainFunctions", {
              method: "DELETE",
              headers: {
                  "Content-Type": "application/json",
                  //"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTQ1MjUzMzksImV4cCI6MTY1NDUzMjUzOX0.sJNNiYuS8FqioZZ-uCVrT4I0rPuphVn6p2uptUaHFPw"
                  "Authorization":localStorage.getItem("cayanToken")
              },
              body: JSON.stringify([{   
                id: id,
              }]),
            });
            let reslJson = await resl.json();
            if (resl.status === 200) {
                
              
              const mainFuncTexts = this.state.mainFuncTexts.filter(item => item.id !== id);  
            this.setState({ mainFuncTexts }); 
            } else {
            }
          } catch (err) {
            console.log(err);
          }
      }
        }


   




        let mainFuncTxtContent = <Spinner/>

    if(this.state.mainFuncTexts.length!=0){
      mainFuncTxtContent  =  <>
 
 <div className='container'>
                <table className="table table-dark table-hover ">

                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Main Function</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>


  { 
   this.state.mainFuncTexts.reverse().map((mainFuncTxt)=>(
       <>
                                <tr key={mainFuncTxt.id}>
                                <th scope="row" >{mainFuncTxt.index}</th>
                                <td >{mainFuncTxt.func}</td>
                                
                                <td className='td-action'>
                                   
                                    <Link to={`/edit-mainfunc/${+mainFuncTxt.id}/${mainFuncTxt.func}`}  className="btn btn-primary edit-btn">Edit</Link>
                                    <button  className="btn btn-danger delete-btn" onClick={()=>{deleteMainFunc(mainFuncTxt.id)}}>Delete</button>
                                </td>
                                </tr>
        
       </>
   ))

}
	
    
	
	
</tbody>
                    </table>

                    

                    
                </div>
                      </>
      
      
    }

        
        return(
            <>        
                 <Nav pageName="/  Main Functions"  />

                <div className='container mt-5'>
                    <h3 className="section-title admin-career-section-title">The main function of Cayan</h3> 
                </div>

               

                       
                               

                             {mainFuncTxtContent}

                           
                             <div className='row new-btn-wrapper'>
                    <Link to="/new-main-func" className="admin-sec-read-btn">Add New Function</Link>

                   
                    </div>
                       


                       
                 


          
            </>



            
        )
    }

}

export default AdminMainFunctions;
