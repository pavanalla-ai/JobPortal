import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import HeaderEmployer from '../../components/header/headerEmployer';
import JobPostBoxeEdit from '../../components/jobpostboxedit';
import { FetchJobs } from '../../api/remoteok';
import JobPostBoxeDelete from '../../components/jobpostboxdelete';
import { FetchJobPostAPI } from '../../api/fetchjobs';

function DeleteJobs()
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
                    <JobPostBoxeDelete prop={{"title":element.companyname,"description":element.jobdescription,
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

export default DeleteJobs;