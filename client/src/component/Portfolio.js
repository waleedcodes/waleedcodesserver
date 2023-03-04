import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "./img/portfolio/1.png";
import img2 from "./img/portfolio/2.png";
import img3 from "./img/portfolio/3.png";
import img4 from "./img/portfolio/4.png";
import img5 from "./img/portfolio/5.png";
import img6 from "./img/portfolio/6.png";

const Portfolio = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    // 
    callFollowme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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



  return (
    <>
      <div className="section4" id="Portfolio" style={{ backgroundColor: props.mode === 'light' ? '#d9d9d9c7' : 'black' }}>
        <h6 className="text-center main_h6">My Portfolio</h6>
        <h3
          className={`text-center main_h3 text-${props.mode === "dark" ? "white" : "dark"
            }`}
        >
          PORTFOLIO
        </h3>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
              <div className="s4_1">
                <img src={img1} alt="" className="img-fluid" />
                <div className="overlay">
                  <div className="text">
                    <h4>Furniture Template</h4>
                    <p>Completed With HTML|CSS and Bootstrap 5 </p>
                    <a href="https://waleedcodes.github.io/B-FurnitureTemp/" target="_blank" rel="noreferrer">
                      <button className="btn2 py-2 mt-3 fs-6">Read More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
              <div className="s4_1">
                <img src={img2} alt="" className="img-fluid" />
                <div className="overlay">
                  <div className="text">
                    <h4>Maple's Resort Template</h4>
                    <p>Completed With HTML|CSS and Bootstrap 5 </p>
                    <a href="https://waleedcodes.github.io/B-TravelTemp/" target="_blank" rel="noreferrer">
                      <button className="btn2 py-2 mt-3 fs-6">Read More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
              <div className="s4_1">
                <img src={img3} alt="" className="img-fluid" />
                <div className="overlay">
                  <div className="text">
                    <h4>UTOPIA Template</h4>
                    <p>Completed With HTML|CSS and Bootstrap 5 </p>
                    <a href="https://waleedcodes.github.io/B-UtopiaTemp/" target="_blank" rel="noreferrer">
                      <button className="btn2 py-2 mt-3 fs-6">Read More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
              <div className="s4_1">
                <img src={img4} alt="" className="img-fluid" />
                <div className="overlay">
                  <div className="text">
                    <h4>Alpha Hospital Template</h4>
                    <p>Completed With HTML|CSS and Bootstrap 5 </p>
                    <a href="https://waleedcodes.github.io/B-HospitalTemp/" target="_blank" rel="noreferrer">
                      <button className="btn2 py-2 mt-3 fs-6">Read More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
              <div className="s4_1">
                <img src={img5} alt="" className="img-fluid" />
                <div className="overlay">
                  <div className="text">
                    <h4>Ezewev Agency Tempalte</h4>
                    <p>Completed With HTML|CSS and Bootstrap 5 </p>
                    <a href="https://waleedcodes.github.io/B-EvewezTemp/" target="_blank" rel="noreferrer">
                      <button className="btn2 py-2 mt-3 fs-6">Read More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-12 col-lg-4 my-4">
              <div className="s4_1">
                <img src={img6} alt="" className="img-fluid" />
                <div className="overlay">
                  <div className="text">
                    <h4>Tech Company Template</h4>
                    <p>Completed With HTML|CSS and Bootstrap 5 </p>
                    <a href="https://waleedcodes.github.io/B-WebTemp/" target="_blank" rel="noreferrer">
                      <button className="btn2 py-2 mt-3 fs-6">Read More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
