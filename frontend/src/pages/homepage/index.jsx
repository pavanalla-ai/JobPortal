import './index.css';
import centerimage from '../../assets/recruitment-process1.jpeg';


import {  useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


function HomePage()
{
    const navigate=useNavigate();
  return( 
  <div class="homecontainer">
    <Header/>
    <div class="boxcenter">
      <div class="subboxcenter">
         <div class="toptext">RECRUITING ON GOING</div>
         <div class="title">Many Companies are looking for perfect candidate for their company venture</div>
         <div class="subtitle">Check out some of the examples in the industies listed below:</div>
         <img src={centerimage} class="centerimg"/>
         <div class="subtitle add">Careers Page Tips for Design and Content</div>
         <hr/>
         <p>The design and content of your careers page play a major role in how candidates perceive your company and whether or not they go on to apply. While your careers page should accurately reflect your company, 
            a few easy-to-implement tips will help you level up. We’ve broken it down to three main elements</p>
            <div class="subtitle add">Essential Elements for a Career Page</div>
         <hr/>
         <p >The design and content of your careers page play a major role in how candidates perceive your company and whether or not they go on to apply. While your careers page should accurately reflect your company, 
            a few easy-to-implement tips will help you level up. We’ve broken it down to three main elements</p>
            <div class="subtitle add">Careers Page Tips for Design and Content</div>
            <hr/>
         <p >The design and content of your careers page play a major role in how candidates perceive your company and whether or not they go on to apply. While your careers page should accurately reflect your company, 
            a few easy-to-implement tips will help you level up. We’ve broken it down to three main elements</p> 
      </div>
    </div>
  <Footer/>
   </div>
);
}


export default HomePage;