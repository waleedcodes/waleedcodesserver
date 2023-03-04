import React, { useContext, useState } from "react";
import img1 from "./img/login2.png";
import img2 from "./img/extra3.JPG";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Login = (props) => {

  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginUser = async (e) => {
    e.preventDefault();
    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("InValid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Sucessfully");
      navigate("/");
    }
  }

  return (
    <>
      <div className="login_form" style={{ backgroundColor: props.mode === 'light' ? '#d9d9d9c7' : 'black' }}>
        <div className="container">
          <div className="row">
            {/* <!--  --> */}
            <div className="col-md-0 col-lg-2"></div>
            {/* <!--  --> */}
            <div className="col-md-12 col-lg-8 login_main">
              <div className="row align-items-center">
                <div className="col-md-6 text-center login_1 gx-0">
                  <img src={img1} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 login_2">
                  <img src={img2} alt="" className="img-fluid" />
                  <h5 className="text-center text-white pt-2">Waleedcodes</h5>
                  <hr />
                  <h6 className="text-center text-white pb-2">
                    OR LOGIN WITH EMAIL
                  </h6>
                  {/* <!-- Form sec --> */}
                  <form className="mt-4" method="POST">
                    <div className="form-group input-group text-start my-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Your Email"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="form-group input-group text-start my-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="Your Password"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </div>
                    {/* <!--  --> */}
                    <button type="submit" className="btn2 form-control" onClick={LoginUser}>
                      Login
                    </button>
                    {/* <!--  --> */}
                  </form>
                  {/* <!--  Signup Form --> */}
                  <Link to={"/signup"}>
                    <h6 className="text-center pt-4 text-white">
                      OR Create a Account
                    </h6>
                  </Link>
                  {/* <!-- End --> */}
                </div>
              </div>
            </div>
            {/* <!--  --> */}
            <div className="col-md-0 col-lg-2"></div>
            {/* <!--  --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
