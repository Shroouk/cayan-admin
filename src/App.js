import './App.css';

import React, { useEffect, useState } from "react";
import { useParams, withRouter } from "react-router";
import axios from "axios";

import { BrowserRouter, Navigate, Route , Routes} from 'react-router-dom';

import Dashboard from './Components/Dashboard/Dashboard';
import AdminAbout from './Components/AdminAbout/AdminAbout';
import AdminCareers from './Components/AdminCareers/AdminCareers';
import AdminServices from './Components/AdminServices/AdminServices';

import EditJob from './Components/EditJob/EditJob';
import EditService from './Components/EditService/EditService';

import Login from './Components/Login/Login';

import NewMainFunc from './Components/NewMainFunc/NewMainFunc';
import EditMainFunc from './Components/EditMainFunc/EditMainFunc';

/* import NewAboutUs from './Components/NewAboutUs/NewAboutUs'; */
import AdminContact from './Components/AdminContact/AdminContact';
import AdminMainFunctions from './Components/AdminMainFunctions/AdminMainFunctions';
import NewServiceCategory from './Components/NewServiceCategory/NewServiceCategory';
import EditServiceCategory from './Components/EditServiceCategory/EditServiceCategory';
import ServiceCatDetails from './Components/ServiceCatDetails/ServiceCatDetails';



const App  = ()=> {


  const [isLogged, setisLogged] = useState('')

 


  const loginHandler = (logged)=>{
    setisLogged(logged)
  }



  return (
   
    





    <BrowserRouter>
    <div className="App">

 
    

  
  
        <Routes>



         <Route path="/" element={<Login  onLoginChangeHandler={loginHandler}/>} /> 
         {console.log(isLogged)}

         <Route path="/dashboard" element={isLogged ? <Dashboard /> : <Navigate to='/'/>}/>
         <Route path="/admin-about" element={isLogged ? <AdminAbout /> : <Navigate to='/'/>}/>
         <Route path="/servicecatdetails/:id" element={isLogged ? <ServiceCatDetails/> : <Navigate to='/'/>}/>
         <Route path="/admin-careers" element={isLogged ? <AdminCareers /> : <Navigate to='/'/>}/>
         <Route path="/admin-services" element={isLogged ? <AdminServices /> : <Navigate to='/'/>}/>
         <Route path="/admin-contact" element={isLogged ? <AdminContact/> : <Navigate to='/'/>}/>
         <Route path="/admin-main-funcs" element={isLogged ? <AdminMainFunctions/> : <Navigate to='/'/>}/>

        
        {/* <Route path="/admin-about" element={<AdminAbout/>} /> */}
 

        {/* <Route path="/edit-job" element={<EditJob/>} />
        <Route path="/edit-service/:id" element={<EditService/>} /> */}

        <Route path="/edit-mainfunc/:id/:func" element={<EditMainFunc/>} />
        <Route path="/edit-servicecat/:id/:service" element={<EditServiceCategory/>} />

        <Route path="/new-main-func" element={<NewMainFunc/>} />
        {/* <Route path="/new-about-us" element={<NewAboutUs/>} /> */}
        <Route path="/new-service-category" element={<NewServiceCategory/>} />

        <Route exact path='/' component={Login}/>
        
        </Routes>
        
     

    </div>
    </BrowserRouter>
    
  );
 
}


export default App;
 