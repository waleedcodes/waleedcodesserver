import React from 'react';
// import PropTypes from 'prop-types';
import logo from './img/logo1.png';
import { Link } from 'react-router-dom';

export default function Footer ( props ) {
    return (
        <div className={`container-fluid gx-0 bg-${ props.mode }`} >
            <div className="container footer">
                <div className="row align-items-baseline gx-0">
                    <div className="col-md-5 col-12 col-sm-12 col-lg-5">
                        <div className="f_1">
                            <img src={logo} alt="" className="img-fluid" />
                            <p className={` text-${ props.mode === 'dark' ? 'white' : 'dark' }`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam
                                magni totam, facere eos iure voluptate.</p>
                            <div className="f1_icon pt-3">
                                <a href="https://facebook.com/waleedcodes" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a href="https://twitter.com/waleedcodes/" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="https://instagram.com/waleedcodes/" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/waleedcodes/" target="_blank" rel="noreferrer">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-12 col-sm-6 col-lg-3">
                        <div className="f_2">
                            <h5>Quick Links</h5>
                            <ul className="nav_ul">
                                <li className="nav-item">
                                    <Link className={` text-${ props.mode === 'dark' ? 'white' : 'dark' }`} to={"/followme"}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={` text-${ props.mode === 'dark' ? 'white' : 'dark' }`} to={"/blog"}>Blogs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={` text-${ props.mode === 'dark' ? 'white' : 'dark' }`} to={"/portfolio"}>Portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={` text-${ props.mode === 'dark' ? 'white' : 'dark' }`} to={"/contact"}>Contact Us</Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 col-12 col-sm-6 col-lg-4">
                        <div className="f_3">
                            <h5>Contact Info</h5>
                            <div className="row align-items-center gx-0">
                                <div className={`col-md-1 col-sm-1 col-3 ftt_1 gx-0 py-1 text-${ props.mode === 'dark' ? 'white' : 'dark' }`}>
                                    <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                </div>
                                <div className={`col-md-11 col-sm-11 ps-2 col-9  gx-0 py-1 ftt_2 text-${ props.mode === 'dark' ? 'white' : 'dark' }`}>
                                    <p>+92 3121324083</p>
                                </div>
                                <div className={`col-md-1 col-sm-1 col-3 ftt_1 gx-0 py-1 text-${ props.mode === 'dark' ? 'white' : 'dark' }`}>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <div className={`col-md-11 col-sm-11 ps-2 col-9  gx-0 py-1 ftt_2 text-${ props.mode === 'dark' ? 'white' : 'dark' }`}>
                                    <p>waleedishfaq1515@gmail.com</p>
                                </div>
                                <div className={`col-md-1 col-sm-1 col-3 ftt_1 gx-0 py-1 text-${ props.mode === 'dark' ? 'white' : 'dark' }`}>
                                    <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                </div>
                                <div className={`col-md-11 col-sm-11 ps-2 col-9  gx-0 py-1 ftt_2 text-${ props.mode === 'dark' ? 'white' : 'dark' }`}>
                                    <p>Abbottabad, Pakistan.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="last_sec text-center">
                <p className={` text-${ props.mode === 'dark' ? 'white' : 'dark' }`}> Design By Waleed Ishfaq </p>
            </div>
        </div >
    )
};


