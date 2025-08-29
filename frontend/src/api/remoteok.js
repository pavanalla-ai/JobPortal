

async function FetchJobs()
{
    const url = 'https://jobs-api14.p.rapidapi.com/v2/list?query=Web%20Developer&location=United%20States&autoTranslateLocation=false&remoteOnly=false&employmentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2d21329a75msh6a3120770f44befp167724jsn9657c13f3bec',
            'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}


export  {FetchJobs}