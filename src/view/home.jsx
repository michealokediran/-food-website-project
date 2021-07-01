import {NavLink} from "react-router-dom";
import {useState} from "react";
import Footer1 from "../footer/footer";

export default function Home() {   
  
  const [image,setimage]=useState(true);
    
    function mouseover() {
        setimage(false)
    }
    function mouseout() {
        setimage(true)
    }

  return(
    <div>
      <section className="slider-body">
        <div  className="slide">
          <div className="slide0 active">
              <div className="text">
                <h1>fresh and delicious</h1>
                <p>traditional italian food to delight the whole family</p>
                <div className="learn"><NavLink to="/gallery" className="nav">LEARN MORE</NavLink></div>
              </div>
              <span>
               <img src="access/images/l-arrow.png" alt=""/>
               <img src="access/images/r-arrow.png" alt=""/>
              </span>
          </div>
          <div className="slide1 active">
            <div className="text">
                  <h1>fresh and delicious</h1>
                  <p>traditional italian food to delight the whole family</p>
                  <div className="learn"><NavLink to="/gallery" className="nav">LEARN MORE</NavLink></div>
                </div>
          </div>
          <div className="slide2 active">
              <div className="text">
                <h1>fresh and delicious</h1>
                <p>traditional italian food to delight the whole family</p>
                <NavLink to="/gallery" className="nav">LEARN MORE</NavLink>
              </div>
          </div>
        </div>
      </section>
      <section className="favorite-store">
        <NavLink to="/gallery" className="favorite1">
          <h3 style={{color:"white"}}>EXPLORE OUR</h3>
          <h1>menu <br/>favorites</h1>
        </NavLink>
        <div className="favorite2">
           <NavLink to="/find-us" className="find" onMouseOver={mouseover} onMouseOut={mouseout}> 
                FIND A STORE <span className="img">{image ? <img src="./access/images/r-arrow.png" alt="d"/> : <img src="./access/images/right-arrowy.png" alt="r"/> }</span>
           </NavLink>
        </div>
      </section>
      <section className="widget" >
        <div className="widget1">
              <div className="widget-div1"   onMouseOut="">
                <NavLink to="latestnews" className="widget-link1">
                  <div className="date">
                    <span className="date1">27</span>
                    <span className="date2">sep</span>
                  </div> <br/> 
                  <h2>Werribee Rozzi’s VIC has <br/> arrived!</h2>
                </NavLink>
              </div>
            <div className="widget-div2">
              <div className="widget-div-chilld1">
                <NavLink to="latestnews" className="widget-link1">
                  <div className="date">
                      <span className=" d1">27</span>
                      <span className=" d2" >sep</span>
                    </div> <br/> 
                    <h2 className="dh">Werribee Rozzi’s VIC has <br/> arrived!</h2>
                </NavLink></div>
              <div className="widget-div-chilld2">
                <NavLink to="latestnews" className="widget-link1">
                   <div className="date">
                      <span className=" d1">27</span>
                      <span className=" d2" >sep</span>
                    </div> <br/> 
                    <h2 className="dh">Merry Merrylands – <br/> NSW!</h2>
                </NavLink> 
              </div>
            </div>
        </div>
        <div className="widget2">
          <div className="join-us">          
            <h3>Join our</h3>
            <h2>franchise famiglia</h2> <br/>
            <NavLink to="/find-us" className="join-link">FIND OUT MORE</NavLink>
          </div>
        </div>
      </section>
      <div className="water-mark">
      </div>
      <img className="water-mark-image" src="./access/images/center-image.png" alt=""></img>
      <span className="angle"><li className="fa fa-angle-right"></li></span>
      <Footer1/>
    </div>
  );
}