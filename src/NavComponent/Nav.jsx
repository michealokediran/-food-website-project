  import {NavLink} from "react-router-dom";
  import {useState} from "react";
export default function Nav() {

    const [image,setimage]=useState(true);
    
    function mouseover() {
        setimage(false)
    }
    function mouseout() {
        setimage(true)
    }
    return(
    <div className="navhome">
        <div className="navbar">
            <div className="logo">
                 <NavLink to="/"><img src="./access/image/logo.png" alt=""/></NavLink>
            </div>
            <div className="right-items">
                <ul>
                    <li> <NavLink to="/" className="Navlink" exact>HOME</NavLink></li>
                    <li> <NavLink to="/aboutus"  className="Navlink">ABOUT US</NavLink></li>
                    <li> <NavLink to="/find-us"  className="Navlink">FIND US</NavLink></li>
                    <li><NavLink to="/gallery" className="Navlink">GALLERY</NavLink></li>
                    <li><NavLink to="/news" className="Navlink">NEWS</NavLink></li>
                    <li><NavLink to="/franchise" className="Navlink">FRANCHISE FAMIGLIA</NavLink></li>   
                </ul>
                <div className="icon">
                    <NavLink to="www.youtube.com"  className="linkicon"><i className="fa fa-youtube-play"></i></NavLink>
                    <NavLink to="www.google.com" className="linkicon"><i className="fa fa-google-plus"></i></NavLink>
                    <NavLink to="www.instagram.com" className="linkicon"><i className="fa fa-instagram"></i></NavLink>
                    <NavLink to="www.facebook.com" className="linkicon"><i className="fa fa-facebook"></i></NavLink>
                </div>
            </div>
        </div>
                <div className="findu" onMouseOver={mouseover} onMouseOut={mouseout}>
                        <NavLink to="/find-us" className="f" style={{color: image ? "black":"yellow"}}> 
                            FIND US <br/>
                            <span className="img">{image ? <img src="./access/images/r-arrow.png" alt="d"/> : <img src="./access/images/right-arrowy.png" alt="r"/> } </span>
                        </NavLink>
                </div>
    </div>    
    );
    
}  
    