import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';
import youtube from '../../assets/images/youtube.png';
import logo1 from '../../assets/360_F_535098697_ACASDfjqeQoNOANy70LkmGvuC2uO6bT5.jpg';
import './footer.css';

function Footer()
{
   return(  
    <div class="footer">
        <div class="imagemenu">
        <img src={logo1} class="logo" width={200} height={200}/>
        <div class="socialicons">
            <img src={facebook} width="30" height="30"/>
            <img src={instagram} width="30" height="30"/>
            <img src={twitter} width="30" height="30"/>
            <img src={youtube} width="30" height="30"/>
        </div>
        </div>
        <div class="footermenu">
            <div class="submenu">
                <h1>About</h1>
                <h5>Careers</h5>
                <h5>Staff</h5>
                <h5>Description</h5>
                <h5>Content</h5>
            </div>
            <div class="submenu">
                <h1>Resources</h1>
                <h5>Customer</h5>
                <h5>Support</h5>
                <h5>Report</h5>
                <h5>Tech</h5>
            </div>
            <div class="submenu">
                <h1>Jobs</h1>
                <h5>Engineering</h5>
                <h5>Software</h5>
                <h5>Warehouse</h5>
                <h5>Technical</h5>
            </div>
        </div>
       </div>);
}

export default Footer;