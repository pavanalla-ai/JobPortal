import './index.css';
import companies from '../../assets/images/companies.jpg';

import food from '../../assets/food.gif';
import tab2 from '../../assets/4577281.gif';
import tab3 from '../../assets/4640911.gif';
import tab4 from '../../assets/1054228.png';
import {  useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CompanyTab from '../../components/companytab';


function Company()
{
    const navigate=useNavigate();
  return( 
  <div class="homecontainer">
    <Header/>
    <div class="boxcenter">
      <div class="subboxcenter" style={{width:"80%"}}>
         <div class="toptext">RECRUITING ON GOING</div>
         <div class="title" style={{textAlign:"center"}}>Top Companies are Hiring Now</div>
         <div class="subtitle"  style={{textAlign:"center"}}>Check out some of the examples in the industies listed below:</div>
         <img src={companies} class="centerimg"/>
         <div class="subtitle add">Careers Page Tips for Design and Content</div>
          <section className='companytabs'>
            <CompanyTab prop={{"image":food,"title":"Food Hub Software Solutions","reviews":51,"btns":["Startup","Internet","Founded:2021"]}}/>
            <CompanyTab prop={{"image":tab2,"title":"Avi Global Plast","reviews":37,"btns":["Startup","Internet","Indian MNC"]}}/>
            <CompanyTab prop={{"image":tab3,"title":"Dean Infotech","reviews":35,"btns":["Startup","Internet","Founded:2021"]}}/>
            <CompanyTab prop={{"image":tab4,"title":"Honeybee Tech Solutions","reviews":42,"btns":["Corporate","Internet"]}}/>

          </section>
      </div>
    </div>
  <Footer/>
   </div>
);
}


export default Company;