import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from "../App"; import { Link } from 'react-router-dom';
import img1 from "./img/logo.png";


const Navbar = (props) => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMean = () => {
    if (state) {
      return (
        <Link className="" to={"/logout"} >
          <button type="button" onClick={() => props.setProgress(100)} className="btn0 mx-2">Logout</button>
        </Link>
      )
    } else {
      return (
        <>
          <Link className="" to={"/login"} >
            <button type="button" onClick={() => props.setProgress(100)} className="btn0 mx-2">Login</button>
          </Link>
          <Link className="" to={"/signup"} >
            <button type="button" onClick={() => props.setProgress(100)} className="btn3 mx-2">Sign Up</button>
          </Link>
        </>
      )
    }
  }

  return (
    <>
      <div className="container-fluid gx-0">
        <nav className={`navbar navbar-expand-lg top_nav py-3 navbar-${props.mode} bg-${props.mode}`}>
          <div className="container">
            <div className="waleednav">
              <Link onClick={() => props.setProgress(100)} className={`navbar-brand fw-bold text-${props.mode === 'dark' ? 'white' : 'dark'}`} to={""} >
                <img src={img1} alt="" className="img-fluid navbar_img" onClick={() => props.setProgress(100)} href="/" />
              </Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              {/* <span className="navbar-toggler-icon"></span> */}
              <i className="fa-solid fa-bars-staggered" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}></i>
            </button>
            <div className="collapse navbar-collapse nav_main " id="navbarSupportedContent">
              <ul className="navbar-nav nav_ul ms-auto">
                {/* <li className="nav-item">
                <Link className={` text-${ props.mode === 'dark' ? 'white' : 'dark' }`} to={"./home.html"}>Home</Link>
              </li> */}
                <li className="nav-item dropdown g-0">
                  <Link onClick={() => props.setProgress(100)} className={`dropdown-toggle text-${props.mode === 'dark' ? 'white' : 'dark'}`} to={"#About"} id="navbarDarkDropdownMenuLink" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    About <i className="fa-sharp fa-solid fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-menu drop_nav mt-4" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><Link onClick={() => props.setProgress(100)} className="dropdown-item" to={"/followme"} > Follow Me</Link></li>
                    <li><Link onClick={() => props.setProgress(100)} className="dropdown-item" to={"/education"} > Education</Link></li>
                    <li><Link onClick={() => props.setProgress(100)} className="dropdown-item" to={"/experience"}> Experience</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link onClick={() => props.setProgress(100)} className={` text-${props.mode === 'dark' ? 'white' : 'dark'}`} to={"/services"}>Services</Link>
                </li>
                <li onClick={() => props.setProgress(100)} className="nav-item">
                  <Link className={` text-${props.mode === 'dark' ? 'white' : 'dark'}`} to={"/portfolio"}>Portfolio</Link>
                </li>
                <li onClick={() => props.setProgress(100)} className="nav-item">
                  <Link className={` text-${props.mode === 'dark' ? 'white' : 'dark'}`} to={"/contact"}>Contact Us</Link>
                </li>
                <li className="nav-item dropdown g-0">
                  <Link onClick={() => props.setProgress(100)} className={`dropdown-toggle text-${props.mode === 'dark' ? 'white' : 'dark'}`} to={"/"} id="navbarDarkDropdownMenuLink" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    More <i className="fa-sharp fa-solid fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-menu drop_nav mt-4" aria-labelledby="navbarDarkDropdownMenuLink">
                    <li><Link className="dropdown-item" onClick={() => props.setProgress(100)} to={"/testimonial"}>Testimonail</Link></li>
                    <li><Link className="dropdown-item" onClick={() => props.setProgress(100)} to={"/blog"}>Blog</Link></li>
                  </ul>
                </li>
              </ul>
              <div className="nav_buttons d-flex">

                <RenderMean />

              </div >
              <div className={`form-check ms-3 form-switch text-${props.mode === 'secondary' ? 'dark' : 'secondary'}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                <label className={`form-check-label fs-6 fw-bold text-${props.mode === 'dark' ? 'white' : 'dark'}`} htmlFor="flexSwitchCheckDefault">{props.mode} Mode</label>
              </div>
            </div >
          </div >
        </nav >
      </div >

    </>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set Tilte Here'
};

export default Navbar;