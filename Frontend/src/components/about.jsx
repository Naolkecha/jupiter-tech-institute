import React from "react";
// Bootstrap CSS


const About = () => {
return (
<div>
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: '400px'}}>
                        <img className="position-absolute w-100 h-100" src="img/Jupiter.png" alt="" style={{objectFit: 'cover'}}></img>
                        <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="img/about-1.jpg" alt="" style={{width: '200px', height: '200px'}}></img>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <h6 className="text-primary text-uppercase mb-2">About Us</h6>
                        <h1 className="display-6 mb-4">Background of JIT</h1>
                        <p>We are dedicated to empowering individuals with the knowledge and skills needed to thrive in the dynamic and ever-evolving world of technology and maintenance.</p>
                        <p className="mb-4">Our mission is to bridge the gap between ambition and expertise. We believe that everyone should have access to quality education in technology, and our courses are designed to make that a reality.</p>
                        <div className="row g-2 mb-4 pb-2">
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Fully Licensed
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Hands-On Learning
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Afordable Fee 
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Best Trainers
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-sm-6">
                                <a className="btn btn-primary py-3 px-5" href="/about">Read More</a>
                            </div>
                            <div className="col-sm-6">
                                <a className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2" href="tel:+0123456789">
                                    <span className="flex-shrink-0 btn-square bg-primary">
                                        <i className="fa fa-phone-alt text-white"></i>
                                    </span>
                                    <span className="px-3">+251 908 08 8309</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
)

}


export default About;