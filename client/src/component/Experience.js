import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "./img/extra2.JPG";

const Experience = (props) => {
  const navigate = useNavigate();
  const callFollowme = async () => {
    try {
      const res = await fetch("/follow", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    // 
    callFollowme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="about" id="About" style={{ backgroundColor: props.mode === 'light' ? '#d9d9d9c7' : 'black' }}>
        <h3
          className={`main_h3 mb-3 text-center text-${props.mode === "dark" ? "white" : "dark"
            }`}
        >
          Experience
        </h3>
        <div className="container">
          <div className="row py-3 align-items-center">
            <div className="col-md-6">
              <div className="about_1">
                <img src={img} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_2">
                <div className="col-md-12" id="abt_2main">
                  <div className="abt_1">
                    <p
                      className={`text-${props.mode === "dark" ? "white" : "dark"
                        }`}
                    >
                      Innovative Front End Developer with 2 years experience
                      building and maintaining responsive websites in the
                      recruiting industry. Proficient in HTML, CSS, jQuery,
                      JavaScript and Next.js; plus modern libraries and
                      frameworks. Passionate about usability and possess working
                      knowledge of Adobe Photoshop & Sketch
                    </p>
                    <div className="row abt_all">
                      <div className="col-md-12 col-lg-6">
                        <h6
                          className={`text-${props.mode === "dark" ? "white" : "dark"
                            }`}
                        >
                          <span className="fw-bold">HTML : ...</span> 100%
                        </h6>
                        <h6
                          className={`text-${props.mode === "dark" ? "white" : "dark"
                            }`}
                        >
                          <span className="fw-bold">CSS : ...</span> 90%
                        </h6>
                        <h6
                          className={`text-${props.mode === "dark" ? "white" : "dark"
                            }`}
                        >
                          <span className="fw-bold">Bootstrap : ...</span> 93%
                        </h6>
                      </div>
                      <div className="col-md-12 col-lg-6">
                        <h6
                          className={`text-${props.mode === "dark" ? "white" : "dark"
                            }`}
                        >
                          <span className="fw-bold">JavaScript : ...</span> 75%
                        </h6>
                        <h6
                          className={`text-${props.mode === "dark" ? "white" : "dark"
                            }`}
                        >
                          <span className="fw-bold">Tailwind Css : ...</span>{" "}
                          85%
                        </h6>
                        <h6
                          className={`text-${props.mode === "dark" ? "white" : "dark"
                            }`}
                        >
                          <span className="fw-bold">Color Theme : ...</span> 95%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
                {/* <div className="col-md-12" id="abt_3main">
                                    <div className="abt_1">
                                        <p>
                                            “Innovative Front End Developer with 5 years experience
                                            building and maintaining responsive websites in the
                                            recruiting industry. Proficient in HTML, CSS, jQuery,
                                            JavaScript and Next.js; plus modern libraries and
                                            frameworks. Passionate about usability and possess working
                                            knowledge of Adobe Photoshop & Sketch
                                        </p>
                                        <div className="row abt_all">
                                            <div className="col-md-6">
                                                <h6 className="text-white">
                                                    <span className="fw-bold">HTML : ...</span>100%
                                                </h6>
                                                <h6 className="text-white">
                                                    <span className="fw-bold">CSS : ...</span> 90%
                                                </h6>
                                                <h6 className="text-white">
                                                    <span className="fw-bold">Bootstrap : ...</span> 93%
                                                </h6>
                                            </div>
                                            <div className="col-md-6">
                                                <h6 className="text-white">
                                                    <span className="fw-bold">JavaScript : ...</span> 75%
                                                </h6>
                                                <h6 className="text-white">
                                                    <span className="fw-bold">Tailwind Css : ...</span> 85%
                                                </h6>
                                                <h6 className="text-white">
                                                    <span className="fw-bold">Color Theme : ...</span> 95%
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                {/* button section */}
                <div className="abt_bottom py-3">
                  <Link to="/contact">
                    <button className="btn3" type="submit">
                      Contact Me
                    </button>
                  </Link>
                  <button className="btn4 mx-3" type="submit">
                    Hire Me
                  </button>
                </div>
                {/*  end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
