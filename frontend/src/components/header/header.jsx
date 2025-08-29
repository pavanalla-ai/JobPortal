import Cookies from 'js-cookie';
import {  useNavigate } from 'react-router-dom';
import logo1 from '../../assets/360_F_535098697_ACASDfjqeQoNOANy70LkmGvuC2uO6bT5.jpg';
import './index.css'
import React, { useEffect, useState } from 'react';
import { Logout } from '../../api/auth';

function Header()
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
        <img src={logo1} class="logo" width={200} height={200}/>
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
    <span onClick={()=>navigate('/jobpostview')}>Jobs</span>
    <span onClick={()=>navigate('/company')}>Companies</span>
    <span onClick={()=>navigate('/')}>Articles</span>
    {!logout?  <span onClick={()=>navigate('/addnotes')}>Add Notes</span>:""}
    <span>About Us</span>
       </div>
    </div>
    </>
 )
}

export default Header;