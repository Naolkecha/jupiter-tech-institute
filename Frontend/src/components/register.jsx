import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom";


const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    Lname: "",
    phone: "",
    email: "",
    Age: "",
    gender: "", // Default value for gender
    education: "",
    course: "", // Default value for course
  });
  

  const [formErrors, setFormErrors] = useState({
    fname: "",
    Lname: "",
    phone: "",
    email: "",
    Age: "",
    gender: "",
    education: "",
    course: "",
  });
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(`Changing ${id} to ${value}`);
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    // Validate First Name
    if (formData.fname.trim() === "") {
      newErrors.fname = "First Name is required";
      valid = false;
    }

    // Validate Last Name
    if (formData.Lname.trim() === "") {
      newErrors.Lname = "Last Name is required";
      valid = false;
    }

    // Validate Phone Number
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number (10 digits required)";
      valid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // Validate Age (you can add more specific age-related validations)
    if (formData.Age.trim() === "") {
        newErrors.Age = "Age is required";
        valid = false;
      } else if (isNaN(formData.Age) || parseInt(formData.Age, 10) <= 0) {
        newErrors.Age = "Invalid age";
        valid = false;
      }

    // Validate Gender
    if (formData.gender !== "male" && formData.gender !== "female") {
      newErrors.gender = "Gender is required";
      valid = false;
    }

    // Validate Educational Status
    if (formData.education.trim() === "") {
      newErrors.education = "Educational Status is required";
      valid = false;
    }

    // Validate Course
    if (formData.course.trim() === "") {
      newErrors.course = "Please select a course";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // If form validation fails, do not submit the form
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle registration failure
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Registration failed");
      }

      // Registration successful, you can handle the response if needed
      

      const result = await response.json();
      setSuccessPopupVisible(true);
      setFormData({
        fname: "",
        Lname: "",
        phone: "",
        email: "",
        Age: "",
        gender: "",
        education: "",
        course: "",
      });

    } catch (error) {
      console.error("Error during registration:", error.message);

      // Display the error message to the user (you can update this part based on your UI framework)
      alert(`Error during registration: ${error.message}`);
    }
  };

  return (
    <div className="wrapper h-100 d-flex align-items-center justify-content-center bg-white">
      <div className="">
        <div
          className="container border shadow px-5 py-5 col-12 col-lg-9 wow fadeInUp mt-5 "
          data-wow-delay="0.5s"
        >
          <h6 className="text-primary text-uppercase mb-2">Register</h6>
          <h1 className="display-6 mb-4">
            Register and Learn our best courses!
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0 bg-light rounded-5"
                    id="fname"
                    placeholder="FName"
                    value={formData.fname}
                    onChange={handleChange}
                  />
                  <label htmlFor="fname">First Name</label>
                  {formErrors.fname && (
                    <div className="text-danger">{formErrors.fname}</div>
                  )}
                </div>
              </div>
  
              <div className="col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0 bg-light"
                    id="Lname"
                    placeholder="LName"
                    value={formData.Lname}
                    onChange={handleChange}
                  />
                  <label htmlFor="Lname">Last Name</label>
                  {formErrors.Lname && (
                    <div className="text-danger">{formErrors.Lname}</div>
                  )}
                </div>
              </div>
  
              <div className="col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0 bg-light"
                    id="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label htmlFor="phone">Phone Number</label>
                  {formErrors.phone && (
                    <div className="text-danger">{formErrors.phone}</div>
                  )}
                </div>
              </div>
  
              <div className="col-sm-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control border-0 bg-light"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    
                  />
                  <label htmlFor="email">Your Email</label>
                  {formErrors.email && (
                    <div className="text-danger">{formErrors.email}</div>
                  )}
                </div>
              </div>
  
              <div className="col-sm-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0 bg-light"
                    id="Age"
                    placeholder="Age"
                    value={formData.Age}
                    onChange={handleChange}
                  />
                  <label htmlFor="Age">Age</label>
                  {formErrors.Age && (
                    <div className="text-danger">{formErrors.Age}</div>
                  )}
                </div>
              </div>
  
              <div className="col-md-6 mb-4">
                <h6 className="mb-2 pb-1">Gender: </h6>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="female"
                    name="gender"
                    id="gender"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="femaleGender">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="maleGender">
                    Male
                  </label>
                </div>
                {formErrors.gender && (
                  <div className="text-danger">{formErrors.gender}</div>
                )}
              </div>
  
              <div className="col-sm-6">
              <select
                  className="form-select border-0 bg-light h-100"
                  value={formData.education}
                  name="education"
                  id="education"
                  onChange={handleChange}
                  required
                >
                   <option value="">Select your education level</option>
                            <option value="High School">High School</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelors Degree">Bachelors Degree</option>
                            <option value="Masters Degree">Masters Degree</option>
                            <option value="PHD">PHD</option>
                           
                </select>
                  {formErrors.education && (
                    <div className="text-danger">{formErrors.education}</div>
                  )}
                
              </div>
  
  
              <div className="col-sm">
                <select
                  className="form-select border-0 bg-light h-100"
                  value={formData.course}
                  name="course"
                  id="course"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a course to register</option>
                  <option value="Mobile Maintenance">Mobile Maintenance</option>
                  <option value="Computer Maintenance">Computer Maintenance</option>
                  <option value="TV maintenance">TV maintenance</option>
                  <option value="Basic computer skills">Basic computer skills</option>
                  <option value="Receiver and Dish installation">Receiver and Dish installation</option>
                  <option value="Graphics Design">Graphics Design</option>
                  <option value="Basic Language Skills">Basic Language Skills</option>
                  <option value="Camera and Video Editing">Camera and Video Editing</option>
                  <option value="COC Skill Gap">COC Skill Gap</option>
                  <option value="Keyboard Training">Keyboard Training</option>
                  <option value="Office Machines Maintenance">Office Machines Maintenance</option>
                </select>
                {formErrors.course && (
                  <div className="text-danger">{formErrors.course}</div>
                )}
              </div>
  
              <div className="col-12">
                <button
                  className="btn btn-primary w-100 py-3"
                  type="submit"
                  data-toggle="modal" data-target="#exampleModalCenter"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Popup
      modal
      nested
      open={successPopupVisible}
      closeOnDocumentClick
      onClose={() => setSuccessPopupVisible(false)}
    >
        
        <div class="">
            <div class="modal-dialog modal-dialog-centered" >
                <div class="modal-content border-0">
                <div class="modal-header">
                    <h5 class="modal-title text-center" >Successfully Registered</h5>
                    <button type="button" class="close border-0" onClick={() => setSuccessPopupVisible(false)}>
                    <span >&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                Thank you for registering. We will contact you soon!
                <span></span>
                </div>
                <div class="modal-footer">
                <Link to="/"> <button type="button" class="btn btn-primary">Go to Home</button> </Link>
                </div>
                </div>
            </div>
        </div>

    </Popup>

    </div>

  );  

}


export default Register;