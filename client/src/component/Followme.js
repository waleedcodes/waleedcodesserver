import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Followme(props) {
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
    <div className="container-fluid" style={{ backgroundColor: props.mode === 'light' ? '#d9d9d9c7' : 'black' }}>
      <form method="GET">
        <div className="section2">
          <div className="container text-center pb-4 pt-3 my-3">
            <div className="row">
              <h3
                className={`main_h3 mb-5 text-${props.mode === "dark" ? "white" : "dark"
                  }`}
              >
                Follow Me
              </h3>
              <div className="col-md-6 col-sm-6 my-3 col-12 col-lg-3">
                <div
                  className={`s2_1 py-5 bg-${props.mode === "light" ? "light" : "dark"
                    }`}
                >
                  <a
                    rel="noreferrer"
                    href="https://www.facebook.com/waleedcodes"
                    target="_blank"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3670/3670032.png"
                      width="60"
                      height="60"
                      alt=""
                      className="img-small mb-4"
                    />
                  </a>
                  <div className="d-flex justify-content-center s2_2">
                    {/* <h3 className={`fw-bold text-${ props.mode === 'dark' ? 'white' : 'dark' }`}>+</h3>
                                    <h3 className={`counter text-${ props.mode === 'dark' ? 'white' : 'dark' }`} data-target="1500">0</h3> */}
                    <h3
                      className={`counter text-${props.mode === "dark" ? "white" : "dark"
                        }`}
                    >
                      3100 +
                    </h3>
                  </div>
                  <p
                    className={`fw-light pt-2 fs-6 text-${props.mode === "dark" ? "white" : "dark"
                      }`}
                  >
                    Facebook
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 my-3 col-12 col-lg-3">
                <div
                  className={`s2_1 py-5 bg-${props.mode === "light" ? "light" : "dark"
                    }`}
                >
                  <a
                    rel="noreferrer"
                    href="https://www.github.com/waleedcodes"
                    target="_blank"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                      width="60"
                      height="60"
                      alt=""
                      className="img-small mb-4"
                    />
                  </a>
                  <div className="d-flex justify-content-center s2_2">
                    <h3
                      className={`counter text-${props.mode === "dark" ? "white" : "dark"
                        }`}
                    >
                      50
                    </h3>
                    {/* <h3 className="h3_1">+</h3>
                                    <h3 className="counter" data-target="50">0</h3> */}
                  </div>
                  <p
                    className={`fw-light pt-2 fs-6 text-${props.mode === "dark" ? "white" : "dark"
                      }`}
                  >
                    GitHub
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 my-3 col-12 col-lg-3">
                <div
                  className={`s2_1 py-5 bg-${props.mode === "light" ? "light" : "dark"
                    }`}
                >
                  <a
                    rel="noreferrer"
                    href="https://www.tiktok.com/@waleedcodes"
                    target="_blank"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3046/3046126.png"
                      width="60"
                      height="60"
                      alt=""
                      title=""
                      className="img-small mb-4"
                    />
                  </a>
                  {/* <h3 className="counter" data-target="450">0</h3> */}
                  <h3
                    className={`counter text-${props.mode === "dark" ? "white" : "dark"
                      }`}
                  >
                    450
                  </h3>
                  <p
                    className={`fw-light pt-2 fs-6 text-${props.mode === "dark" ? "white" : "dark"
                      }`}
                  >
                    Tiktok
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 my-3 col-12 col-lg-3">
                <div
                  className={`s2_1 py-5 bg-${props.mode === "light" ? "light" : "dark"
                    }`}
                >
                  <a
                    rel="noreferrer"
                    href="https://www.instagram.com/waleedcodes/"
                    target="_blank"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
                      width="60"
                      height="60"
                      alt=""
                      title=""
                      className="img-small mb-4"
                    />
                  </a>
                  {/* <h3 className="counter" data-target="800">0</h3> */}
                  <h3
                    className={`counter text-${props.mode === "dark" ? "white" : "dark"
                      }`}
                  >
                    800
                  </h3>
                  <p
                    className={`fw-light pt-2 fs-6 text-${props.mode === "dark" ? "white" : "dark"
                      }`}
                  >
                    Instagram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

// import FacebookLogin from 'react-facebook-login';
// import React from 'react'
// const responseFacebook = ( response ) => {
//     console.log( "Login Result Here", response );
// }
// const componentClicked = ( data ) => {
//     console.warn( data )
// }
// export default class Followme extends Component {
//     render () {
//         return (
//             <div>
//                 <FacebookLogin
//                     appId="2938963049744399"
//                     autoLoad={true}
//                     fields="name,email,picture"
//                     onClick={componentClicked}
//                     callback={responseFacebook} />
//             </div>
//         )
//     }
// }
