import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const TestimonialSlider = (props) => {
  const navigate = useNavigate();

  const callFollowme = async () => {
    try {
      const res = await fetch("/follow", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        }
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

  // Testimonials array can be passed in as props or hardcoded into the component
  const testimonials = props.testimonials || [{ image: '/img/extra4.jpg', title: 'Jhon Due', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', }, { image: '/img/extra5.jpg', title: 'Chirs Panha', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', }, { image: '/img/extra6.jpg', title: 'Robbet jack', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', },];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    }, 4000);
    setIntervalId(id);

    // Clean up the interval when the component unmounts
    return () => clearInterval(id);
  }, [currentIndex, testimonials.length]);

  // Render the current testimonial, image, and a navigation bar for switching between testimonials
  return (
    <div className="testimonial-slider container-fluid" style={{ backgroundColor: props.mode === 'light' ? '#d9d9d9c7' : 'black' }} >
      <div className="container text-center py-5">
        <div className="row py-5">
          <h3 className={`main_h3 mb-5 text-${props.mode === 'dark' ? 'white' : 'dark'}`} >Client Testimonial</h3>
          <div className="col-md-2 col-lg-3"></div>
          <div className="col-md-8 col-lg-6">
            <div className="testimonial">
              <img src={testimonials[currentIndex].image} alt="" />
              <h4 className={`fw-bold my-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>{testimonials[currentIndex].title}</h4>
              <p className={`text-${props.mode === 'dark' ? 'white' : 'dark'}`}>{testimonials[currentIndex].description}</p>
            </div>
          </div>
          <div className="col-md-2 col-lg-3"></div>

          <div className="navigation">
            <span className="float-start sp1" onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}>
              &#10094;
            </span>
            <span className="float-end sp2" onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}>
              &#10095;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
