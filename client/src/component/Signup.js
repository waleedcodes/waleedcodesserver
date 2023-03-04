import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img1 from "./img/22.png";
import img2 from "./img/extra3.JPG";

const Signup = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("InValid Register");
      console.log("InValid Register");
    } else {
      window.alert("Register Sucessfully");
      console.log("Sucessfully Register");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="signup_form" id="sign-up" style={{ backgroundColor: props.mode === 'light' ? '#d9d9d9c7' : 'black' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-0 col-lg-1"></div>
            <div className="col-md-12 col-lg-10 signup_main">
              <div className="row align-items-center">
                <div className="col-md-6 text-center signup_1 gx-0">
                  <img src={img1} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 signup_2">
                  <img src={img2} alt="" className="img-fluid" />
                  <h5 className="text-center text-white pt-2">Waleedcodes</h5>
                  <hr />
                  <form className="mt-4" method="POST">
                    {/* ********************************** */}
                    <div className="form-group input-group text-start my-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        value={user.name}
                        onChange={handleInputs}
                        placeholder="Your Name"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </div>
                    {/* ********************************** */}
                    <div className="form-group input-group text-start my-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={handleInputs}
                        placeholder="Your Email"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </div>
                    {/* ********************************** */}
                    <div className="form-group input-group text-start my-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-phone-volume"></i>
                      </span>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        value={user.phone}
                        onChange={handleInputs}
                        placeholder="Your Phone"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </div>
                    {/* ********************************** */}
                    <div className="form-group input-group text-start my-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-briefcase"></i>
                      </span>
                      <input
                        type="text"
                        name="work"
                        id="work"
                        value={user.work}
                        onChange={handleInputs}
                        placeholder="Your Profession"
                        className="form-control"
                        aria-describedby="basic-addon1"
                        required
                      />
                    </div>
                    {/* ********************************** */}
                    <div className="form-group input-group text-start my-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        required
                        value={user.password}
                        onChange={handleInputs}
                        placeholder="Your Password"
                        className="form-control"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {/* ********************************** */}
                    <div className="form-group input-group text-start my-4">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa-solid fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        name="cpassword"
                        id="cpassword"
                        required
                        value={user.cpassword}
                        onChange={handleInputs}
                        placeholder="Confirm Your Password"
                        className="form-control"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    {/* ********************************** */}
                    <button
                      type="submit"
                      className="btn2 form-control"
                      id="signup"
                      value="Register Now"
                      onClick={PostData}
                    > Register Now</button>
                  </form>
                  <Link to={"/Login"}>
                    <h6 className="text-center pt-4 text-white">OR LOGIN</h6>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-0 col-lg-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
