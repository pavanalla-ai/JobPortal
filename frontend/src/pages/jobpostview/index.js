import './index.css';
import downArrow from '../../assets/images/downarrow.png';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { FetchJobs } from '../../api/remoteok';
import { useEffect, useState } from 'react';
import JobPostBox from '../../components/jobpostbox';
import { FetchJobPostAPI } from '../../api/fetchjobs';
import { useNavigate } from 'react-router-dom';

function JobPostingView(){

    const navigate=useNavigate();
    const [jobs,setJobs]=useState([]);

    const [jobsPost,setJobsPost]=useState([]);

    const [name,setName]=useState([]);

    const fetchJobs=async()=>{
        const response=await FetchJobs();
        if(response)
        {
           console.log("response",response.jobs);
           setJobs(response.jobs)
        }

     }
     const fetchJobsPost=async()=>{
        const response=await FetchJobPostAPI();
        if(response)
        {
           console.log("response",response);
           setJobsPost(response.data)
        }
  
     }

     const [isSalaryExpanded, setIsSalaryExpanded] = useState(false);

     const [isdatePosted, setIsDatePosted] = useState(false);

     const [isLocation, setIsLocation] = useState(false);

     const toggleSalaryOptions = () => {
         setIsSalaryExpanded((prev) => !prev);
     };
     const toggleDatePosted = () => {
        setIsDatePosted((prev) => !prev);
     };
     const toggleLocation = () => {
        setIsLocation((prev) => !prev);
     };
     
     
     useEffect(()=>fetchJobs,[]);
     useEffect(()=>fetchJobsPost,[]);
    return(
        <>
            <div className="container">
             <Header/>
            <div className="postviewnavigation">
                <div class="searchbar">
                    <input type="text" name="search" placeholder="Job Type, Description, Company, Location" onChange={(e)=>setName(e.target.value)}/>
                    <button type="button" name="searchbutton" onClick={()=>navigate(`/search?name=${name}`)}>Search</button>
              </div>
            </div>
            <div className="postviewbox">
            <div className="categoriesbox">
            <div className="subcatgory">
            <div className='arrowimg'>  
                <h3>Location</h3>
                    <img src={downArrow} alt="" width="20" height="20"  className={`expandbutton ${isLocation?'rotate':''}`}  onClick={()=>{
                toggleLocation()
            }}/></div>
                <div className={`expandedoptions ${isLocation ? 'visible' : 'hidden'}`}>
                {jobs?.map((element,index)=>(
                   <h5>{element.location.split(',')[0]}</h5>
                ))}
                </div>
            </div> 
            <div class="subcatgory">
                
                <div className='arrowimg'>  
                <h3>Salary</h3>
                    <img src={downArrow} alt="" width="20" height="20"  className={`expandbutton ${isSalaryExpanded?'rotate':''}`}  onClick={()=>{
                toggleSalaryOptions()
            }}/></div>
                <div className={`expandedoptions ${isSalaryExpanded ? 'visible' : 'hidden'}`}>
                {jobs?.map((element,index)=>(
                   <h5>{element.salaryRange.split(' ')[0]}</h5>
                ))}
                </div>
            </div>
            <div class="subcatgory">
                <div className='arrowimg'>  
                <h3 class="dateposted">Date Posted</h3>
                        <img src={downArrow} alt="" width="20" height="20"  className={`expandbutton ${isdatePosted?'rotate':''}`}  onClick={()=>{
                    toggleDatePosted()
                }}/>
            </div>
                <div className={`expandedoptions ${isdatePosted ? 'visible' : 'hidden'}`} >
                {jobs?.map((element,index)=>(
                   <h5>{element.datePosted}</h5>
                ))}
                </div>
            </div>
            </div>
            <div className="jobpostbox">
                <h3>Job Posted By Rapid</h3>
                {jobs?.map((element,index)=>(
                    <JobPostBox prop={{"title":element.title,"description":element.description,
                        "location":element.location,
                        "company":element.company,
                        "salarRange":element.salarRange,
                        "datePosted":element.datePosted,
                        "employmentType":element.employmentType
                    }} key={index}/>
                ))}
                   <h3>Job Posted By SuperFast</h3>
               {jobsPost?.map((element,index)=>(
                    <JobPostBox prop={{"title":element.companyname,"description":element.jobdescription,
                        "location":element.location,
                        "company":element.companyname,
                        "salarRange":element.salarRange,
                        "datePosted":element.dataposted.split('T')[0],
                        "employmentType":element.jobtype
                    }} key={index}/>
                ))}
            </div> 
            </div>
            <Footer/>
            </div>
          
            </>
    );
}

export default JobPostingView