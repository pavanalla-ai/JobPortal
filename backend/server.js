const express=require('express');
const dotenv=require('dotenv');
const router=require('./routes/router.js');
const app=express();
const {mongoose}=require('./models/employeemodel.js');
const cookieparser=require('cookie-parser');
dotenv.config({path:'../server/config.env'});
const cors=require('cors')


const local_URL='http://localhost:3000'
app.use(cookieparser());
app.use(cors({origin:local_URL}))
mongoose.connect(process.env.MONGO_URI,{dbName:'RecruitmentDB'}).then(e=>console.log('Database Connected!')).catch(e=>console.log(e));



app.use(express.urlencoded({extended:true}) );
app.use(express.json());

app.set('view engine','ejs');

app.use('/joining',router);


app.listen(process.env.PORT || '2000',()=>console.log('connection established'));