import url from "../utils/utils";

async function FetchJobPostAPI()
{ 
    try
    {
        const response=await fetch(`${url}/joining/jobpostview`,{method:'GET'});
        if(response.ok)
        {
            const data=await response.json();
            console.log("data",data);
          return data;
        }
        return "response not ok!"
    }
    catch(error)
    {
        return error
    }

}

export {FetchJobPostAPI}
