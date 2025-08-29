import { useNavigate } from "react-router-dom";
import { PostLoginDetails } from "../../api/auth";
import { useState } from "react";

function Login()
{
    const navigate=useNavigate();

    const [message,setMessage]=useState()
    const auth=async(e)=>{
      e.preventDefault();
      const formData=new FormData(e.target);
      const entries=Object.fromEntries(formData.entries());
      const response=await PostLoginDetails(entries);
      if(response)
      {
        setMessage(response.message)
        if(response.token && response.user=="Joinee")
        {
         navigate('/jobpostview');
        }
       
        if(response.token && response.user=="Employer")
         navigate('/jobposting');
      }
   }
return (<>
<div class="maincontainer">
        <div class="subcontainer">
         <h1>Tech news, trends and companies - just for you.</h1>
         <h3>Join our community to stay current on tech and grow your skills.</h3>
         <div class="parentinputbox">
          <form onSubmit={auth} id="form">
         <div class="inputbox">
            <input type="email" placeholder="Email Address" name="email"/>
            <label for="email">Email</label>
         </div>
         <div class="inputbox">
            <input type="password" placeholder="Password" name="password"/>
            <label for="password">Password</label>
         </div>
         <h2><button  style={{color: "white",fontSize:"22px",marginLeft:"65px",border:'none',background:'transparent'}} type='submit'> Log in</button></h2>
       
         <h2 style={{color: "white",marginLeft:"95px"}} onClick={()=>navigate('/employee_register')}> Sign up</h2> </form>
         <label style={{color:"white"}}>{message}</label>
        </div>
    </div>
      <div class="authfooter">
        <h5>Before signing up the page. Please read the terms and policy!</h5>
      </div>
    </div>
</>);
}

export default Login;