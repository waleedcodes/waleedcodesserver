import React from "react";
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import img1 from "./img/Main4.jpeg";

export default function Home(props) {
  return (
    <>
      <div className="section1" style={{ backgroundColor: props.mode === 'light' ? '#d9d9d9c7' : 'black' }}>
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-6">
              <div className="s1_1">
                <h3 className="text-primary">
                  Hello, <span>I'm</span>
                </h3>
                <h1
                  className={`text-${props.mode === "dark" ? "white" : "dark"}`}
                >
                  Waleed Ishfaq
                </h1>
                <h2
                  className={`text-${props.mode === "dark" ? "white" : "dark"}`}
                >
                  Front-End Developer
                </h2>
                <p
                  className={`s1_p text-${props.mode === "dark" ? "white" : "dark"
                    }`}
                >
                  As a skilled and experienced front-end developer, I have a
                  proven track record of creating visually stunning and
                  user-friendly websites that effectively communicate clients'
                  messages and achieve their business goals. I am proficient in
                  HTML, CSS, and JavaScript, as well as popular front-end
                  frameworks such as React and Next.{" "}
                </p>
                <Link to='/Contact'>
                  <button type="button" className="btn1">
                    Contact Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="s1_2">
                <img src={img1} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
