import url from "../utils/utils";

async function JobPostAPI(data)
{ 
    console.log(JSON.stringify(data));
    const options={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    }
    try
    {
        const response=await fetch(`${url}/joining/jobpostform`,options);
        if(response.ok)
        {
            const data=await response.json();
            console.log(data);
          return data;
        }
        return "response not ok!"
    }
    catch(error)
    {
        return error
    }
}
async function AddNoteApi(data)
{ 
    console.log(JSON.stringify(data));
    const options={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    }
    try
    {
        const response=await fetch(`${url}/joining/addnotes`,options);
        if(response.ok)
        {
            const data=await response.json();
            console.log(data);
          return data;
        }
        return "response not ok!"
    }
    catch(error)
    {
        return error
    }

}

async function FetchNotesAPI(id)
{ 
    const options={
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({"id":id})
    }
    try
    {
        const response=await fetch(`${url}/joining/fetchnotes`,options);
        if(response.ok)
        {
            const data=await response.json();
          return data;
        }
        return "response not ok!",response
    }
    catch(error)
    {
        return error
    }

}


async function JobUpdatePostAPI(data)
{ 
    const options={
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    }
    try
    {
        const response=await fetch(`${url}/joining/jobpostform`,options);
        if(response.ok)
        {
            const data=await response.json();
            console.log(data);
          return data;
        }
        return response;
    }
    catch(error)
    {
        return error
    }
}
async function JobDeleteAPI(id)
{ 
    console.log("id",id)
    const options={
        method:'Delete',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({"id":id})
    }
    try
    {
        const response=await fetch(`${url}/joining/jobdeletepost`,options);
        if(response.ok)
        {
            const data=await response.json();
          return data;
        }
        return response;
    }
    catch(error)
    {
        return error
    }

}



export {JobPostAPI,JobUpdatePostAPI,JobDeleteAPI,AddNoteApi,FetchNotesAPI};