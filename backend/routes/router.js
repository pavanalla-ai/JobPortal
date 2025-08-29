const express=require('express');
const router=express.Router();

//use to create a token which consist of id,username and password
const jwt=require('jsonwebtoken');

const {employmentmodel}=require('../models/employeemodel.js');
const employeejobmodel = require('../models/employeejobpostmodel.js');
const notesModel = require('../models/notes.js');
const bcrypt = require('bcrypt');
var username='';
router.use(express.urlencoded({extended:true}));

router.use(express.json());



router.get('/employerRegister',(req,res)=>{{
    res.render(process.cwd()+'/frontend/views/html/employerregister.ejs',{option1:'Employer',option2:'Joinee'});
}});

router.post('/employerRegister',async (req,res)=>{{
    const body=req.body;

    const regex='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
   

    if(!body)
        return res.status(400).json({"success":false,"message":"fields cannot beempty!"});
     
            console.log(body)
            try
            {
                const hashedPassword=await bcrypt.hash(body.password,10)
                body.password = hashedPassword;

                const user=new employmentmodel(body);
                
                const token=jwt.sign({id:user.name,email:user.email,option:user.option},process.env.JSON_SECRET);
    
                user.save().then(e=>res.json({'message':'Registered successfully',token:token}))
                .catch(e=>res.json({'message':'Already registered! Please Login!'}));    
                
            }
             catch(err)
             {
                res.status(500).json({"message":`error:${err}`});
             }      
}});


//employee login route
router.post('/employeelogin',async (req,res)=>{
    const body=req.body;
    const regex='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
    const email=body.email;

    if(!body)
        return res.status(400).json({"success":false,"message":"fields cannot beempty!"});
     
        if(!email.match(regex))
        {
            res.json({"message":'email not valid!'});
            return;
        }
        try
        {
            const user=await employmentmodel.findOne({email:body.email});
            if(!user)
            {
                res.json({"message":'email not found! Register first!'});
                return;
            }
            if(user)
            {
                const match=await bcrypt.compare(body.password,user.password)
                if(!match)
                {
                    res.json({"message":'Password not match! Please verify your password!'});
                     return;
                }
                username=user.name;
                const token=jwt.sign({id:user.name,email:user.email,option:user.option},process.env.JSON_SECRET);
    
                res.status(201).json({"message":'Authentication Completed',name:user.name, token:token,'user':user.option,'id':user._id});
            }
        
        }
        catch(err)
        {
            res.status(500).json({"message":`error:${err}`});
        }
      
});

function checkforcookie(req,res,next)
{
    const token=req.cookies.token;
    if(!token)
    {
        return res.send('Unauthorised login! Please login again!');
    }
    const user=jwt.verify(token,process.env.JSON_SECRET);
    if(!user)
        return res.status(400).json({"success":false,"message":"user not verified!"});
    req.user=user;
    next();
}
router.get('/profile',checkforcookie,(req,res)=>{

    const user=req.user;
        if(user)
        {
            if(user.option=='Joinee')
                return res.status(201).json({"success":true,"message":"loginby joinee","user":user.option});
            else
               return res.status(201).json({"success":true,"message":"login by employer","user":user.option});
        }
        else
          res.status(400).json({"message":'Unable to find the user'});
       
});


router.post('/jobpostform',async (req,res)=> {
    const {jobtitle,jobdescription,companyname,location,jobtype,experiencelevel,datePosted}=req.body;
    
    if(!jobtitle || !jobdescription || !companyname || !location || !jobtype || !experiencelevel || !datePosted)
        return res.status(400).json({"success":false,"message":"fields empty!"});

    try{
        const jobpost=await employeejobmodel.create({
            jobtitle:jobtitle,
               jobdescription:jobdescription,
               companyname:companyname,
               location:location,
               jobtype:jobtype,
               experiencelevel:experiencelevel,
               dataposted:datePosted,
        });

        if(!jobpost)
            return res.status(400).json({"success":false,"message":"Job not posted!"});
       
        return res.status(201).json({"success":true,"message":"Job Posted!"});
    }
    catch(err)
    {
        return res.status(400).json({"success":false,"message":"Network issue!"});
    }
});

router.put('/jobpostform',async (req,res)=> {
    const {id,jobtitle,jobdescription,companyname,location,jobtype,experiencelevel,datePosted}=req.body;
    
    console.log(id);
    if(!id || !jobtitle || !jobdescription || !companyname || !location || !jobtype || !experiencelevel || !datePosted)
        return res.status(400).json({"success":false,"message":"fields empty!"});



    try{
        const post=await employeejobmodel.findOne({_id:id});
        if(!post)
        {
            return res.status(400).json({"success":false,"message":"No post found with this id"});
        }

        
        post.jobtitle=jobtitle,
        post.jobdescription=jobdescription,
        post.companyname=companyname,
        post.location=location,
        post.jobtype=jobtype,
        post.experiencelevel=experiencelevel,
        post.dataposted=datePosted,

         
        await post.save();

        return res.status(201).json({"success":true,"message":"Job Post Updated!"});
    }
    catch(err)
    {
        return res.status(400).json({"success":false,"message":"Network issue!"});
    }
});


router.post('/fetchnotes',async (req,res)=> {
    const {id}=req.body;
    
 
    if(!id)
        return res.status(400).json({"success":false,"message":"id can't be empty!"});

    try{
        const notes=await notesModel.find({id:id})
        console.log(notes)
        return res.status(201).json({"success":true,"message":"Fetch notes successfully",data:notes});
    }
    catch(err)
    {
        return res.status(400).json({"success":false,"message":"Network issue!"});
    }
});
router.post('/addnotes',async (req,res)=> {
    const {id,companyname,jobtitle,applicationstatus,notes,date}=req.body;
    
    console.log(id,companyname,jobtitle,applicationstatus,notes,date)
    if(!companyname || !jobtitle || !applicationstatus || !notes || !date)
        return res.status(400).json({"success":false,"message":"fields empty!"});

    try{
        const newJob = new notesModel({
            id:id,
            companyname: companyname,
            jobtitle: jobtitle,
            applicationstatus: applicationstatus,
            notes: notes,
            date:date
          });

          await newJob.save()
        return res.status(201).json({"success":true,"message":"Notes has been saved"});
    }
    catch(err)
    {
        return res.status(400).json({"success":false,"message":"Network issue!"});
    }
});

//all job post view page route
router.get('/jobpostview',async (req,res)=> {
    const allposts=await employeejobmodel.find({});
    
    console.log(allposts)
    if(!allposts)
        return res.status(400).json({"success":false,"message":"Unable to fetch job posts"});

    return res.status(200).json({"success":true,"message":"Successfully fetch jobs",data:allposts});
});

router.delete('/jobdeletepost',async (req,res)=> {
    const {id}=req.body;
    console.log("id",id)
    const allposts=await employeejobmodel.findOne({_id:id});
    
 
    if(!allposts)
        return res.status(400).json({"success":false,"message":"Unable to fetch job post"});

    const del=await employeejobmodel.deleteOne({_id:id});
    if(del)
    return res.status(200).json({"success":true,"message":"Deleted the post"});
});

router.get('/logout',(req,res)=>{
    console.log("work")
    res.clearCookie('token');
    res.status(201).json({"message":"logout successfully"})
});

module.exports=router;