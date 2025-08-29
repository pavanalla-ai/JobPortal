import {  useNavigate } from 'react-router-dom';
import logo1 from '../../assets/images/logo1.png';
import { Logout } from '../../api/auth';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
function HeaderEmployer()
{
    const navigate=useNavigate();

    const [logout,setLogout]=useState(true);

    useEffect(()=>{
        if(Cookies.get("token") && Cookies.get("user"))
            setLogout(false);
        else
           setLogout(true);
    },[]);

    const handleLogout=async (e)=>{
        const logout=await Logout();
        navigate('/login')
    }

 return(
    <>
    <div class="topbar">
        <img src={logo1} class="logo"/>
        {
                logout? 
                
                 (
                    <div class="menu">
                       
                 <div class="employeebutton" onClick={()=>navigate('/employee_register')}>For Employees</div>
                <h2 class="joinbutton" onClick={()=>navigate('/employee_register')}>Join</h2>
                <h2>|</h2>
                <h2 class="loginbutton" onClick={()=>navigate('/login')}>Log In</h2>
                </div>
                ):
                (<div class="menu">
                     <h3 style={{marginRight:'50px'}}>Welcome! {Cookies.get('name')}</h3>
                     <div class="employeebutton" onClick={()=>navigate('/employee_register')}>For Employees</div>
               <h2 class="loginbutton" onClick={()=>{handleLogout()}}>Log Out</h2> </div>)
            }
    </div>
    <div class="navigation">
        <div class="subnav">
        <span onClick={()=>navigate("/jobposting")}>Home</span>
        <span onClick={()=>navigate("/editjob")}>Edit Jobs</span>
        <span onClick={()=>navigate("/deletejob")}>Delete Jobs</span>
        <span onClick={()=>navigate("/jobposting")}>Post Jobs</span>
       
       </div>
    </div>
    </>
 )
}

export default HeaderEmployer;