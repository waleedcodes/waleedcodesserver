import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Home from "./component/Home";
import Error from "./component/Error";
import Alert from "./component/Alert";
import Footer from "./component/Footer";
import Testimonial from "./component/Testimonial";
import Followme from "./component/Followme";
import React, { createContext, useReducer, useState } from "react";
import Education from "./component/Education";
import Experience from "./component/Experience";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Blog from "./component/Blog";
import Login from "./component/Login";
import Signup from "./component/Signup";
import LoadingBar from "react-top-loading-bar";
import Logout from "./component/Logout";
import { initialState, reducer } from "./reducer/UseReducer";

// Context Api

export const UserContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [progress, setProgress] = useState(0);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert(" Dark Mode has been Enable ", "success");
      document.title = " WaleedCodes - Dark Mode ";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light Mode has been Enable ", "success");
      document.title = " WaleedCodes - Light Mode ";
    }
  };


  return (

    <UserContext.Provider value={{ state, dispatch }}>

      <BrowserRouter>
        <LoadingBar
          height={3}
          color="#f60838"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <Navbar
          title="Waleedcodes"
          mode={mode}
          setProgress={setProgress}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path="*" element={<Error />} />
          {/* <Route path="/formtext" element={<Formtext mode={mode} setProgress={setProgress} showAlert={showAlert} />} /> */}
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <Home
                mode={mode}
                setProgress={setProgress}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/testimonial"
            element={<Testimonial mode={mode} setProgress={setProgress} />}
          />
          <Route
            path="/followme"
            element={<Followme mode={mode} setProgress={setProgress} />}
          />
          <Route
            path="/education"
            element={
              <Education
                mode={mode}
                setProgress={setProgress}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/experience"
            element={
              <Experience
                mode={mode}
                setProgress={setProgress}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/services"
            element={
              <Services
                mode={mode}
                setProgress={setProgress}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/portfolio"
            element={
              <Portfolio
                mode={mode}
                setProgress={setProgress}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                mode={mode}
                setProgress={setProgress}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/blog"
            element={
              <Blog
                mode={mode}
                setProgress={setProgress}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                mode={mode}
                setProgress={setProgress}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup
                mode={mode}
                setProgress={setProgress}
                showAlert={showAlert}
              />
            }
          />
          <Route
            path="/logout"
            element={
              <Logout
                mode={mode}
                setProgress={setProgress}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
        <Footer mode={mode} setProgress={setProgress} showAlert={showAlert} />
      </BrowserRouter>

    </UserContext.Provider>
  );
}

export default App;

