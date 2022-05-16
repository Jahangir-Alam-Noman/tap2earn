import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../assets/img/tap2earnLogo.png';

const Header = () => {
  const [toggleHeader, setToggleHeader] = useState(false);

  const location =  useLocation();
  console.log(`location.pathname`, location.pathname)

  useEffect(() => {
   
  }, [])
  return (
    <header className="header-content">
      <div className="logo">
        <Link to="/"><img src={logo} alt="logo"/></Link>
      </div>
      <nav
        className={
          toggleHeader === true ? "navHead-content open" : "navHead-content"
        }
      >
        <ul>
          <li>
            <NavLink className={location.pathname === "/" ? "activeHeader " : ""}  to="/">Home</NavLink>
          </li>
          <li >
            <NavLink className={(isActive) => (!isActive ? " " : "activeHeader")} to="about">About us</NavLink>
          </li>
          <li >
            <NavLink className={(isActive) =>  (!isActive ? " " : "activeHeader")}  to="investments">Investment packages</NavLink>
          </li>
          <li  >
            <NavLink className={(isActive) => (!isActive ? " " : "activeHeader")}  to="packages">Subcription packages</NavLink>
          </li>
          <li   >
            <NavLink className={(isActive) => (!isActive ? " " : "activeHeader")} to="referral-program">Referral program</NavLink>
          </li>
          <li>
            <NavLink className={(isActive) => (!isActive ? " " : "activeHeader")} to="faq">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      <div className="auth-btn">
        <Link to="login">Login</Link>
        <Link className="sign" to="register">Sign Up</Link>
        {/* <Link className="login" to="/user-dashboard/index">
          Cabinet
        </Link> */}
      </div>
      <div
        className={toggleHeader === true ? "navBtn open" : "navBtn"}
        onClick={() => setToggleHeader(!toggleHeader)}
      >
        <span></span>
      </div>
    </header>
  );
};

export default Header;
