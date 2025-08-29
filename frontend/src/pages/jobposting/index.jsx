import Footer from '../../components/footer/footer';
import './index.css';
import employerhead from '../../assets/images/employerhead.png';
import HeaderEmployer from '../../components/header/headerEmployer.jsx';
import { useEffect } from 'react';
import { FetchJobs } from '../../api/remoteok.js';
import { JobPostAPI, JobUpdatePostAPI } from '../../api/postjob.js';

import { useLocation } from 'react-router-dom';
 function JobPosting()
{

   const location=useLocation();
   const query=new URLSearchParams(location.search);
   const id=query.get('id');

   const handleSubmit=async (e)=>{
      e.preventDefault();
      
      if(id)
      {
         const formData=new FormData(e.target);
         formData.append("id",id);
         const entries=Object.fromEntries(formData.entries());
         console.log("entries",entries);
         
         const response=await JobUpdatePostAPI(entries);
         if(response)
         {
           alert(response.message);
         }
         console.log(response);
      }
      else
      {
         const formData=new FormData(e.target);
         const entries=Object.fromEntries(formData.entries());
         const response=await JobPostAPI(entries);
         if(response)
         {
            
            alert(response.message);
         }
         console.log(response);
      }
   }

    return(
    <>
 <div class="jobpostingcontainer">
     <HeaderEmployer/>
    <div class="boxcenter">
      <div class="subboxcenter">
         <div class="topimage">
            <img src={employerhead}/>
            </div>
          <div class="title">Many Companies are looking for perfect candidate for their company venture</div> 
         <div class="subtitle">You haven't posted a job before, so you'll need to create an employer account.</div>
      </div>
      <form class="postinformation" onSubmit={handleSubmit}>
        <div class="inputboxposting">
           <label for="jobtitle">Job Title *</label>
            <input type="text" name="jobtitle"/>
        </div>
        <div class="inputboxposting">
            <label for="jobdescription">Job Description *</label>
             <input type="text" name="jobdescription"/>
         </div>
         <div class="inputboxposting">
            <label for="companyname">Company Name *</label>
             <input type="text" name="companyname"/>
         </div>
         <div class="inputboxposting">
            <label for="location">Location *</label>
             <input type="text" name="location"/>
         </div>
         <div class="inputboxposting">
            <label for="jobtype">Job Type *</label>
             <input type="text" name="jobtype"/>
         </div>
         <div class="inputboxposting">
            <label for="experiencelevel">Experience Level *</label>
             <select name="experiencelevel" class="experiencelevel">
                <option>0 to 1</option>
                <option>1 to 2</option>
                <option>2 to 3</option>
                <option>3 to 4</option>
                <option>4 to 5</option>
                </select>
         </div>
         <div class="inputboxposting">
            <label for="datePosted">Date *</label>
             <input type="date" name="datePosted"/>
         </div>
         <div class="continuebutton">
            <button type="submit">Post Job</button>
        </div>
     </form>
    </div>
    <Footer/>
   </div>

    </>
    )
}

export default JobPosting;