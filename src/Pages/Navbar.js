import React, { useState } from "react";
import "../cssfile/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faSignOut,
  faPenToSquare,
  faGear,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const element = <FontAwesomeIcon icon={faBars} />;
  const element2 = <FontAwesomeIcon icon={faGear} />;
  const element3 = <FontAwesomeIcon icon={faSignOut} />;
  const element4 = <FontAwesomeIcon icon={faPenToSquare} />;
  const element5 = <FontAwesomeIcon icon={faBell} />;

  const [isOpen, setisOpen] = useState(false)
  const OpenMenu = () => {
    setisOpen((val) => !val);
    
  }
  
  return (
    <div className="navbar">
      <img src="./images/logo.png" alt="shoes" className="logo" />
      <h1>
        <button className="dash" onClick={OpenMenu} >
          {element} <span className="home-now">X</span>
          <span className="dash-log"> Dashboard</span>
        </button>
      </h1>
      <h2 className={`open-btn ${isOpen ?  'is-open': ''}`}>
        <ul className='nav-bar'>
          <li>
            <Link to="/request">
              {element4}
              Create Request
            </Link>
          </li>
          <li>
            <Link to="/notification">{element5} Notification</Link>
          </li>
          <li>
            <Link to="/setting">{element2} Setting</Link>
          </li>
          <li>
            <Link to="/logout">{element3} Log-out</Link>
          </li>
        </ul>
        <img src="./images/chtat.png " alt="chat" className="chat" />
      </h2>
    </div>
  );
};

export default Navbar;
