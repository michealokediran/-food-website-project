import Footer1 from "../footer/footer";
import {NavLink} from "react-router-dom";

export default function Aboutus() {
    return (
        <div>
            <div className="about-us">
            <div className="about1"></div>
            <div className="about2">
                <h2>About Us</h2>
                <p>Rozzi’s is the collaborative outcome of seasoned food & business <br/>
                 operators who have combined their past 25 years’ industry <br/> 
                 experience to create this exciting dining offer.</p> <br/>
                 <p>We believe in creating interesting and unique places to enjoy our <br/>
                 simple and great tasting “Real Italian” food. Sometimes we pop up <br/>
                 in shopping centres, sometimes in a great shopping strip. Either <br/> way we’ll make sure you feel like you’re in our home and ready <br/>
                 for some of our great, simple food.</p><br/>
                 <p>If you love the Rozzi’s concept like we do and want to enquire <br/> about joining our “franchise famiglia” <NavLink className="aboutnav" to="/franchise"> click here. </NavLink></p>  
                <h6>Ciao for now</h6>
            </div>
            </div>
            <span className="angle about-angle"><li className="fa fa-angle-right"></li></span>
            <Footer1/>
        </div>
        );  
}