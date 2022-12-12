import React, { Component } from 'react';
import { Link} from 'react-router-dom';

import './JobCard.css'

class JobCard extends Component {
  state={
    jobAt: new Date(this.props.careerAt)
  }
  render() {

    const diffTime = Math.abs(this.state.jobAt - new Date());
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 


    return (
      <>
        <div className="single-job">
		<div className="icon"><i className="fa fa-code-fork"></i></div>
		<div className="job-title">{this.props.careerTitle}</div>
		<p ><span className=''>Yrs of Exp: </span>{this.props.careerYears}</p>
    {/* <p>{this.state.jobAt.getUTCMonth() + 1} / {this.state.jobAt.getUTCDate()} / {this.state.jobAt.getUTCFullYear()}</p> */}
    <p className="job-description">{diffDays} day ago</p>
		<Link to={`/career/vacancy/${+this.props.careerId}`} className="job-cta">
			Apply Now
		</Link>
	    </div>

  
      </>
    )
  }
}

export default JobCard;
