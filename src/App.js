import {Route,BrowserRouter,NavLink} from "react-router-dom";
import Home from "./view/home"
import Nav from "./NavComponent/Nav";
import Findus from "./view/find-us";
import Aboutus from "./view/aboutus";
import Gallery from "./view/gallery";
import News from "./view/news";
import Franchise from "./view/franchise";
import Latestnews from "./view/latestnews/latestnews";

export default function App() {
  const date = new Date();
   const currentyear = date.getFullYear();

  return(
    <div>
      <BrowserRouter className="browser">
        <Nav/>
        <Route component={Aboutus} path="/aboutus"/>
        <Route component={Findus} path="/find-us"/>
        <Route component={Gallery} path="/gallery"/>
        <Route component={News} path="/news"/>
        <Route component={Franchise} path="/franchise"/>
        <Route component={Latestnews} path="/latestnews"/>
        <Route component={Home} path="/"/>
      <div className="head-footerlink">
          <ul>
                <li> <NavLink to="/aboutus" className="footerlink" exact>ABOUT</NavLink></li>
                <li> <NavLink to="/gallery"  className="footerlink">GALLERY</NavLink></li>
                <li><NavLink to="/find-us" className="footerlink">FIND A STORE</NavLink></li>
                <li><NavLink to="/news" className="footerlink">NEWS</NavLink></li>
                <li><NavLink to="/" className="footerlink">CAREERS</NavLink></li>
                <li><NavLink to="/" className="footerlink">TERMS AND CONDITIONS</NavLink></li>
                <li><NavLink to="/" className="footerlink">CONTACT US</NavLink></li>  
                <h4>&copy; {currentyear} Rozzis Group of Companies. Website by WebAlive</h4> 
          </ul>
          <div className="icon icon-footer">
                    <NavLink to="www.youtube.com"  className="linkicon f-link"><i className="fa fa-youtube-play"></i></NavLink>
                    <NavLink to="www.google.com" className="linkicon f-link"><i className="fa fa-google-plus"></i></NavLink>
                    <NavLink to="www.instagram.com" className="linkicon f-link"><i className="fa fa-instagram"></i></NavLink>
                    <NavLink to="www.facebook.com" className="linkicon f-link"><i className="fa fa-facebook"></i></NavLink>
                </div>
          </div>
          </BrowserRouter>
    </div>
  );
}
