import { NavLink } from "react-router-dom";

export default function Card(props) {
    return (
        <div>
             <div className="card">
                <img src={props.img} alt=""/>
                    <div className="date">
                        <span className=" d1">17</span>
                        <span className=" d2" >Apr</span>
                    </div>
                    <NavLink to="/news"><h3>Merry Merrylands - NSW!</h3></NavLink>
                    <p>We are thrilled to announce the Opening of our 3rd <br/>
                     NSW Rozzi’s store. Opening Monday 1st May we would <br/>
                      like to wish our latest Franchise Partners – Michelle ...</p>
                      <NavLink to="">READ MORE</NavLink>
             </div>
        </div>
        );  
}