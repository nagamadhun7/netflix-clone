import React, { useEffect, useState } from "react";

import "../styles/navbar.css";

const Navbar = () => {

    const [show, setShow] = useState(false)

    const navbarTransition = () => {
        if (window.scrollY > 100){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }


    useEffect((
        () => {
            window.addEventListener('scroll', navbarTransition)
            return () => window.removeEventListener('scroll', navbarTransition)
        }
    ),[])

  return (
    <div className={`navbar ${show && 'navbar_black'}`}>
        <div className="navbar-container">
        <img
      className="navbar-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="logo"
      />
      <img
      className="navbar-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
      />
        </div>
    </div>
  );
};

export default Navbar;
