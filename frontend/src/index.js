import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/homepage/index.jsx';
import EmployeeRegister from './pages/auth/employeeregister.jsx';
import Login from './pages/auth/login.jsx';
import JobPostingView from './pages/jobpostview/index.js';
import JobPosting from './pages/jobposting/index.jsx';
import EditJobs from './pages/editjobs/index.jsx';
import DeleteJobs from './pages/deletejobs/index.js';
import { Authenticated } from './components/protectedroute/index.jsx';
import Company from './pages/companies/index.jsx';
import JobPostSearch from './pages/jobpostsearch/index.js';
import AddNotes from './pages/addnotes/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/employee_register' element={<EmployeeRegister/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/jobpostview' element={<Authenticated><JobPostingView/></Authenticated>}/>
      <Route path='/jobposting' element={<Authenticated><JobPosting/></Authenticated>}/>
      <Route path='/editjob' element={<Authenticated><EditJobs/></Authenticated>}/>
      <Route path='/deletejob' element={<Authenticated><DeleteJobs/></Authenticated>} />
      <Route path='/company' element={<Company/>}/>
      <Route path='/search' element={<JobPostSearch/>}/>
      <Route path='/addnotes' element={<Authenticated><AddNotes/></Authenticated>}/>
    </Routes>
    </BrowserRouter>
  
  </React.StrictMode>
);

