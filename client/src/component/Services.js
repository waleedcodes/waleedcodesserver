import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Services = (props) => {
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
            <div className="section3" id="Services" style={{ backgroundColor: props.mode === 'light' ? '#d9d9d9c7' : 'black' }}>
                <h6 className="text-center main_h6">My Services</h6>
                <h3 className={`text-center main_h3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>SERVICES</h3>
                <div className="container text-center s3_main">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 my-3 col-12 col-lg-4">
                            <div className={`s3_1 bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                                <img src="https://cdn-icons-png.flaticon.com/512/4943/4943029.png" width="56" height="56" alt=""
                                    className="img-small" />
                                <h5 className={` fw-bold mt-4 mb-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>HTML 5</h5>
                                <p className={` text-center text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                                    Complete 39+ Project in HTML 5
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 my-3 col-12 col-lg-4">
                            <div className={`s3_1 bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" width="56" height="56" alt=""
                                    className="img-small" />
                                <h5 className={` fw-bold mt-4 mb-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>CSS 3</h5>
                                <p className={` text-center text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                                    Complete 35+ Project in Css 3
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 my-3 col-12 col-lg-4">
                            <div className={`s3_1 bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                                <img src=" https://cdn-icons-png.flaticon.com/512/8099/8099526.png" width="56" height="56"
                                    alt="" className="img-small" />
                                <h5 className={` fw-bold mt-4 mb-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>JavaScript</h5>
                                <p className={` text-center text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                                    Complete 12+ Project in JavaScript
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 my-3 col-12 col-lg-4">
                            <div className={`s3_1 bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" width="56" height="56" alt=""
                                    className="img-small" />
                                <h5 className={` fw-bold mt-4 mb-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>Bootstrap 4</h5>
                                <p className={` text-center text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                                    Complete 23+ Project in Bootstrap 4
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 my-3 col-12 col-lg-4">
                            <div className={`s3_1 bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" width="56" height="56" alt=""
                                    className="img-small" />
                                <h5 className={` fw-bold mt-4 mb-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>Bootstrap 5</h5>
                                <p className={` text-center text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                                    Complete 38+ Project in Bootstrap 5
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 my-3 col-12 col-lg-4">
                            <div className={`s3_1 bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                                <img src="https://cdn-icons-png.flaticon.com/512/6338/6338536.png" width="56" height="56" alt=""
                                    className="img-small" />
                                <h5 className={` fw-bold mt-4 mb-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>VS Code Color Theme</h5>
                                <p className={` text-center text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                                    Complete 3+ VS Code Color Theme
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 my-3 col-12 col-lg-4">
                            <div className={`s3_1 bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                                <img src="https://cdn-icons-png.flaticon.com/512/1078/1078407.png" width="56" height="56" alt=""
                                    className="img-small" />
                                <h5 className={` fw-bold mt-4 mb-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>Tailwind CSS</h5>
                                <p className={` text-center text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                                    Complete 5+ Project in Tailwind Css
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 my-3 col-12 col-lg-4">
                            <div className={`s3_1 bg-${props.mode === 'light' ? 'light' : 'dark'}`}>
                                <img src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png" width="56" height="56" alt=""
                                    className="img-small" />
                                <h5 className={` fw-bold mt-4 mb-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>React JS </h5>
                                <p className={` text-center text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
                                    Complete 10+ Project in React JS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services