import { NavLink } from "react-router-dom";

export default function Footer1() {

      return(
      <div>
        <div className="footer1">
          <h2>follow us on instagram</h2>
          <NavLink to="https://www.instagram.com/rozzisofficial/" className="lin">@rozzisofficial</NavLink>
          <div className="tex"><p>Hmm. We’re having trouble <br/> finding that site.</p></div>
          <NavLink to="https://www.instagram.com/rozzisofficial/" className="lin f"><span>FOLLOW US</span></NavLink>
          </div>
                </div>
    );
  }