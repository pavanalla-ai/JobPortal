import { JobDeleteAPI } from '../../api/postjob';
import './index.css';

const JobPostBoxeDelete=({prop})=>{

    const DeletePost=async (id)=>{

        const response=await JobDeleteAPI(id);
        if(response)
        {
            alert(response.message);
        }
        console.log(response);
        
     }
    return (
    <div class="subjobpost">
        <div class="subbodyjob">
            <div class="subpostcategory">
                <h4>Job Title</h4>
                <p>{prop.title}</p>
            </div>
            <div class="subpostcategory">
                <h4>Job Description</h4>
                <p>{prop.description}</p>
            </div>
            <div class="subpostcategory">
                <h4>Company</h4>
                <p>{prop.company}</p>
            </div>
            <div class="subpostcategory">
                <h4>Salary Range</h4>
                <p>{prop.salaryRange}</p>
            </div>
            <div class="subpostcategory">
                <h4>Job Type</h4>
                <p>{prop.employmentType}</p>
            </div>
            {/* <div class="subpostcategory">
                <h4>Skills required</h4>
                <p></p>
            </div> */}
            <div class="subpostcategory">
                <h4>Location</h4>
                <p>{prop.location}</p>
            </div>
            {/* <div class="subpostcategory">
                <h4>Contact Number</h4>
                <p></p>
            </div> */}
            <div class="subpostcategoryDate">
                <h4>Date Posted: &nbsp;</h4>
                <p>{prop.datePosted}</p>
            </div>
            <div class="subpostcategoryDelete">
                <h4 onClick={()=>{
                  const confirm=  window.confirm("Are you sure want to delete post!");
                   if(confirm)
                   {
                    DeletePost(prop.id)
                   }
                }
                }>Delete Post &nbsp;</h4>
            </div>
    </div>
</div> );
}

export default JobPostBoxeDelete;