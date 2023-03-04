import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "./img/blog1.png";
import img2 from "./img/blog2.png";
import img3 from "./img/blog3.jpg";
const Blog = (props) => {
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
    callFollowme();
  }, []);
  return (
    <>
      <div className="section5" id="Blog" style={{ backgroundColor: props.mode === 'light' ? '#d9d9d9c7' : 'black' }}>
        <h6 className="text-center main_h6">My Blog</h6>
        <h3
          className={`text-center mb-4 main_h3 text-${props.mode === "dark" ? "white" : "dark"
            }`}
        >
          BLOG
        </h3>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-4 my-3">
              <div className="s5_1">
                <div className="card">
                  <img src={img1} className="card-img-top" alt="..." />
                  <div
                    className={`card-body bg-${props.mode === "light" ? "light" : "dark"
                      }`}
                  >
                    <h5
                      className={`card-title fw-bold text-${props.mode === "dark" ? "white" : "dark"
                        }`}
                    >
                      Tips For Conducting Remote UX Research and Testing
                    </h5>
                    <p
                      className={`card-text py-2 text-${props.mode === "dark" ? "white" : "dark"
                        }`}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button className="btn1 my-2">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-4 my-3">
              <div className="s5_1">
                <div className="card">
                  <img src={img2} className="card-img-top" alt="..." />
                  <div
                    className={`card-body bg-${props.mode === "light" ? "light" : "dark"
                      }`}
                  >
                    <h5
                      className={`card-title fw-bold text-${props.mode === "dark" ? "white" : "dark"
                        }`}
                    >
                      Tips For Conducting Remote UX Research and Testing
                    </h5>
                    <p
                      className={`card-text py-2 text-${props.mode === "dark" ? "white" : "dark"
                        }`}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button className="btn1 my-2">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-4 my-3">
              <div className="s5_1">
                <div className="card">
                  <img src={img3} className="card-img-top" alt="..." />
                  <div
                    className={`card-body bg-${props.mode === "light" ? "light" : "dark"
                      }`}
                  >
                    <h5
                      className={`card-title fw-bold text-${props.mode === "dark" ? "white" : "dark"
                        }`}
                    >
                      Tips For Conducting Remote UX Research and Testing
                    </h5>
                    <p
                      className={`card-text py-2 text-${props.mode === "dark" ? "white" : "dark"
                        }`}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button className="btn1 my-2">Read More</button>
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

export default Blog;
