import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';


import Home from './Components/Home/Home';
import Navbar from './Components/Navigation/Navbar';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
//import Services from './Components/Services/Services';
import Careers from './Components/Careers/Careers';
import JobDetails from './Components/JobDetails/JobDetails';
import SingleService from './Components/SingleService/SingleService';
//import MainFunction from './Components/MainFunction/MainFunction';
import NotFound from './Components/NotFound/NotFound';



class App extends Component {

 

  render(){
    

   // console.log("render");
  return (
    <BrowserRouter>
    <div className="App">

    <Navbar/>
        <Routes>
        {/* <Route exact path='/' component={Home}/> */}
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/single-service/:service_id/:id" element={<SingleService />} />

     
{/*         <Route exact path="/single-service/:service_id/:id" render={(props) => <SingleService {...props} /> } /> 
 */}        



        
        <Route path="/careers" element={<Careers/>} />

        <Route path="/career/vacancy/:id" element={<JobDetails/>} />
        {/* <Route path="/details" element={<JobDetails/>} /> */}
        <Route path="/single-service" element={<SingleService/>} />
        
        <Route path='*' element={<NotFound />}/>
        </Routes>
        
     <Footer/>

    </div>
    </BrowserRouter>
    
    
  );
  }
}

export default App;
