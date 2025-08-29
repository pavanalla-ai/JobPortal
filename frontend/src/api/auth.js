import Cookies from 'js-cookie';

import url from '../utils/utils';


async function PostRegisterDetails(data)
{
    console.log(data);
    try
    {
        const response=await fetch(`${url}/joining/employerRegister`,{method:'POST',headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)})
            if(response.ok)
            {
                const data=await response.json();
                console.log(data);
                return data;
            }
            return "Reponse issue"
    }
    catch(error)
    {
        return error;
    }   
}

async function PostLoginDetails(data)
{
    const body=data;
    try
    {
        const response=await fetch(`${url}/joining/employeelogin`,{method:'POST',headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)})
            if(response.ok)
            {
                const data=await response.json();
                Cookies.set("token",data.token);
                Cookies.set("user",data.user);
                Cookies.set("id",data.id);
                Cookies.set("name",data.name);
                return data;
            }
            return "Response issue"
    }
    catch(error)
    {
        return error;
    }   
}

async function Logout()
{
    try
    {
        const response=await fetch(`${url}/joining/logout`)
            if(response.ok)
            {
                const data=await response.json();
                Cookies.set("token","");
                Cookies.set("user","");
                return data;
            }
            return "Response issue",response;
    }
    catch(error)
    {
        return error;
    }   
}

export {PostLoginDetails,PostRegisterDetails,Logout}