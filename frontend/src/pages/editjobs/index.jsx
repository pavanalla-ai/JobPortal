import './index.css';
import downArrow from '../../assets/images/downarrow.png';
import Footer from '../../components/footer/footer';
import HeaderEmployer from '../../components/header/headerEmployer';
import { FetchJobs } from '../../api/remoteok';
import { useEffect, useState } from 'react';
import JobPostBoxEdit from '../../components/jobpostboxedit/index.js';
import { FetchJobPostAPI } from '../../api/fetchjobs.js';


function EditJobs()
{
  const [jobs,setJobs]=useState([]);

  const fetchJobs=async()=>{
      const response=await FetchJobPostAPI();
      if(response)
      {
         console.log("response",response);
         setJobs(response.data)
      }

   }

   useEffect(()=>fetchJobs,[]);
   return(
   <>
              <div className="container">
             <HeaderEmployer/>
            <div className="postviewnavigation">
                <div class="searchbar">
                    <input type="text" name="search" placeholder="Town, City, Country"/>
                    <button type="button" name="searchbutton">Search</button>
              </div>
            </div>
            <div className="postviewbox">
            <div className="jobpostbox">
                <h3>Job Posted By Rapid</h3>
                {jobs?.map((element,index)=>(
                    <JobPostBoxEdit prop={{"title":element.jobtitle,"description":element.jobdescription,
                        "location":element.location,
                        "company":element.companyname,
                        "salarRange":element.salarRange,
                        "datePosted":element.dataposted.split('T')[0],
                        "employmentType":element.jobtype,
                        "id":element._id
                    }} key={index}/>
                ))}
               
            </div> 
            </div>
            <Footer/>
            </div>
            
   </>
   );
}

export default EditJobs;