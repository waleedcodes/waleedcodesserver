import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = (props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    //
    callContactus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const callContactus = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
        // message: data.message,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };


  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };
  // ***********************
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Message Not Send!");
      alert("Please Fill message Feild");
      console.log("Message Not Send!");
    } else {
      window.alert("Thanks You For Leaving a Message");
      setUserData({ ...userData, message: "" });
      navigate("/");
    }
  };
  // function clearInput() {
  //   document.getElementById("Form").reset();
  // }

  return (
    <>
      <div className="section6" id="Contact" style={{ backgroundColor: props.mode === 'light' ? '#d9d9d9c7' : 'black' }}>
        <h3
          className={` text-center main_h3 mb-4 text-${props.mode === "dark" ? "white" : "dark"
            }`}
        >
          Contact Me
        </h3>
        <div></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="s6_1">
                <form method="POST" id="Form">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className={`form-control m6_input text-${props.mode === "light" ? "white" : "danger"} bg-${props.mode === "light" ? "dark" : "light"} `}
                        onChange={handleInputs}
                        name="name"
                        value={userData.name}
                        placeholder="First name"
                        id="first_name"
                      />
                      <span className="error" id="user1error"></span>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        onChange={handleInputs}
                        name="phone"
                        value={userData.phone}
                        placeholder="Phone"
                        className={`form-control m6_input text-${props.mode === "light" ? "white" : "danger"} bg-${props.mode === "light" ? "dark" : "light"} `}
                        id="last_name"
                      />
                      <span className="error" id="user2error"></span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        className={`form-control m6_input text-${props.mode === "light" ? "white" : "danger"} bg-${props.mode === "light" ? "dark" : "light"} `}
                        type="email"
                        onChange={handleInputs}
                        name="email"
                        value={userData.email}
                        placeholder="Email"
                        id="email"
                      />
                      <span className="error" id="emailerror"></span>
                    </div>
                  </div>
                  <div className="">
                    <textarea
                      className={`form-control m6_input text-${props.mode === "light" ? "white" : "danger"} bg-${props.mode === "light" ? "dark" : "light"} `}
                      placeholder="Message  this a "
                      onChange={handleInputs}
                      name="message"
                      value={userData.message}
                      rows="6"
                      id="textarea"
                      autocomplete="off"
                      required
                    ></textarea>
                    <span className="error" id="texterror"></span>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn4 mt-4 ms-2"
                      onClick={contactForm}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
