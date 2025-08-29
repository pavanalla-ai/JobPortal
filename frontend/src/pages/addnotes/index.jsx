import './index.css';
import Cookies from 'js-cookie';
import centerimage from '../../assets/images/centerimage.avif';


import {  useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { AddNoteApi, FetchNotesAPI } from '../../api/postjob';
import { useEffect, useState } from 'react';


function AddNotes()
{
    const navigate=useNavigate();
    const [notes, setNotes] = useState([]);
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const formData=new FormData(e.target);
        const id=Cookies.get('id');
        formData.append("id",id);
        const entries=Object.fromEntries(formData.entries());
        const response=await AddNoteApi(entries)
      
        if(response)
        {
            alert(response.message)
        }
    }
    const fetchNotes=async ()=>{

        const response=await FetchNotesAPI(Cookies.get('id'))
        if(response && response.data)
        {
           console.log(response.data)
           setNotes(response.data)
        }
    }
    useEffect(()=>fetchNotes,[]);
  return( 
  <div class="homecontainer">
    <Header/>
    <div class="boxcenter">
      <div class="subboxcenter">
         <div class="toptext" style={{color:"#333d90"}}>Add Company as a Target Goal</div>
            <form onSubmit={handleSubmit} className='addnotesform'>
                    <div className="field">
                <label>Company Name</label>
                <input type="text" placeholder="Enter company name"  name='companyname'/>
            </div>

            <div className="field">
                <label>Job Title</label>
                <input type="text" placeholder="Enter job title or position"  name='jobtitle'/>
            </div>

            <div className="field">
                <label>Application Status</label>
                <select  name='applicationstatus'>
                <option value="Not Applied">Not Applied</option>
                <option value="Applied">Applied</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offer Received">Offer Received</option>
                </select>
            </div>
            <div className="field">
                <label>Notes</label>
                <textarea rows="4" placeholder="Add any relevant notes" name='notes'></textarea>
            </div>
            <div className="field">
                <label>Follow-Up Date</label>
                <input type="date" name='date'/>
            </div>
            <div className="field">
                <button type='submit'>Submit</button>
            </div>
            </form>
            <div className="notes-section">
            <h3>Your Notes</h3>
            {notes.length === 0 ? (
              <p>No notes found. Add a new note to get started!</p>
            ) : (
              <ul>
                {notes?.map((note, index) => (
                  <li key={index} className="note-item">
                    <strong>Company:</strong> {note.companyname} <br />
                    <strong>Job Title:</strong> {note.jobtitle} <br />
                    <strong>Status:</strong> {note.applicationstatus} <br />
                    <strong>Notes:</strong> {note.notes} <br />
                    <strong>Date:</strong> {new Date(note.date).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            )}
            </div>
    </div>
  <Footer/>
   </div>
   </div>
);
}


export default AddNotes;