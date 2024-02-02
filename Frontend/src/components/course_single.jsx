import React from "react";


const singleCourse = () => {

    
    return (
        <section class="section-sm m-4">
        <div class="container m-10 ">
            <div className="container d-xl-flex align-items-start flex-xl-row">
                <div class="row">
                <div class="col-12 mb-md-4 mt-3 ">
                    <img src="img/courses-2.jpg" alt=" " class="img-fluid w-75 h-75"></img>
                </div>
                </div>
            <div class="row d-flex flex-column align-items-left m-lg-4 mt-2 justify-content-between pl-1 ml-1">
            <div class="order-1 col-md-0 mb-2 mb-xl-2 pb-3">
                <h3>Mobile Maintenance Course</h3>
            </div>
            <div class="d-flex align-items-left m-0 order-sm-3 order-xl-2 col-12 order-2">
                <ul class="list-inline d-flex flex-column text-xl-left -5">
                <li class="list-inline-item mr-5 mb-sm-0">
                    <div class="d-flex align-items-center">
                    <i class="ti-book text-primary icon-md mr-2"></i>
                    <div class="text-left d-flex align-items-center ">
                        <h6 class="mb-0">SCHEDULE</h6>
                        <p class="mb-0 p-2">3 Day per Week</p>
                    </div>
                    </div>
                </li>
                <li class="list-inline-item mr-4 mb-sm-0">
                    <div class="d-flex align-items-center">
                    <i class="ti-alarm-clock text-primary icon-md mr-2"></i>
                    <div class="text-left d-flex align-items-center">
                        <h6 class="mb-0">DURATION</h6>
                        <p class="mb-0 p-2">3 Months</p>
                    </div>
                    </div>
                </li>
                <li class="list-inline-item mr-4 mb-sm-0">
                    <div class="d-flex align-items-center">
                    <i class="ti-wallet text-primary icon-md mr-2"></i>
                    <div class="text-left d-flex align-items-center">
                        <h6 class="mb-0">FEE</h6>
                        <p class="mb-0 p-2">From: 1500 birr</p>
                    </div>
                    </div>
                </li>
                </ul>
            </div>
            <div class="text-sm-right text-left order-sm-2 order-3 order-xl-3 col-sm-6 mb-4 mb-xl-0">
                <a href="course-single.html" class="btn btn-primary">Apply now</a>
            </div>
            <div class="col-12 mt-4 order-4">
                <div class="border-bottom border-primary"></div>
            </div>
            </div>
            </div>
            <div class="row">
            <div class="col-12 mb-4">
                <h3>About the Course</h3>
                <p >In the fast-paced world of technology, mobile devices have become an integral part of our daily lives. With the increasing complexity of mobile phones and the rapid evolution of technology, there is a growing demand for skilled professionals who can effectively maintain and repair mobile devices. A Mobile Maintenance Course is designed to equip individuals with the knowledge and skills necessary to troubleshoot, repair, and maintain a wide range of mobile devices.</p>
            </div>
            <div class="col-12 mb-4">
                <h3 class="mb-3">Includes</h3>
                <div class="col-12 px-0">
                <div class="row">
                    <div class="col-md-6">
                    <ul class="list-styled">
                        <li>Hardware Maintenance </li>
                        <li>Software maintenance.</li>
                        <li>Multimetre usage</li>
                    </ul>
                    </div>
                    {/* <div class="col-md-6">
                    <ul class="list-styled">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    </ul>
                    </div> */}
                </div>
                </div>
            </div>
            <div class="col-12 mb-4">
                <h3 class="mb-3">Weekly Schedule</h3>
                <ul class="list-styled">
                <li>Three days Per week for three months</li>

                
                </ul>
            </div>
            <div class="col-12 mb-5">
                <h3>Fees</h3>
                <ul>
                <li>Regular program Fee: 1500 per Month Duration: 3 months</li>
                <li> Special program (Personal class) Fee: 5,000 ETB Duration: 21 to 25 days</li>
                </ul>
            </div>
            
            </div>
        </div>
        </section>

)};

export default singleCourse;