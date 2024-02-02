import React from "react";
import { Link } from "react-router-dom";

const Courses = (props) => {

return (

        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100">
                <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">{props.price} Birr</div>
                <h5 className="mb-3"> {props.title}</h5>
                <p>{props.description}</p>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item small"><i className="fa fa-clock text-primary me-2"></i>Duration</li>
                    <li className="breadcrumb-item small"><i className="fa fa-calendar-alt text-primary me-2"></i>{props.length}</li>
                </ol>              
                </div>
                <div className="position-relative mt-auto">
                    <img className="img-fluid" src={props.image} alt=""></img>
                    <div className="courses-overlay">
                        <Link className="btn btn-outline-primary border-2" to ="/register">REGISTER</Link>
                    </div>
                </div>
            </div>

           
        </div>
  
     

)

}
export default Courses;
