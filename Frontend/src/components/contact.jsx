import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [successPopupVisible, setSuccessPopupVisible] = useState(false);

  const validateForm = () => {
    const errors = {};

    // Validate name
    if (!formState.name.trim()) {
      errors.name = 'Name is required!';
    }

    // Validate email
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      errors.email = 'Invalid email format!';
    }

    // Validate subject
    if (!formState.subject.trim()) {
      errors.subject = 'Subject is required!';
    }

    // Validate message
    if (!formState.message.trim()) {
      errors.message = 'Cannot send empty message!';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('https://formspree.io/f/mbjnldzv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formState)
        });

        if (response.ok) {
          console.log('Form submitted successfully:', response);

          setSuccessPopupVisible(true);
          setFormState({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        } else {
          console.error('Error submitting form:', response);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

return (

<div class="container-xxl py-6">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight: '450px'}}>
                    <div class="position-relative h-100">
                    <iframe className="position-relative w-100 h-100" alt="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2049.3807965209617!2d38.66187678551103!3d9.071835514162402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b89e7db51b633%3A0x5259a9d62920fd45!2sTserha%20Tsihon!5e1!3m2!1sen!2sus!4v1702758124671!5m2!1sen!2sus"
                        frameborder="0" style={{minHeight: '450px', border:0}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <h6 class="text-primary text-uppercase mb-2">Contact Us</h6>
                    <h1 class="display-6 mb-4">If You Have Any Query, Please Contact Us</h1>
                    <form onSubmit={submitHandler}>
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control border-0 bg-light" name="name" id="name" placeholder="Your Name" value={formState.name} onChange={changeHandler}></input>
                                    <label for="name">Your Name</label>
                                    {validationErrors.message && <div className="text-danger">{validationErrors.name}</div>}

                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control border-0 bg-light" name="email" id="email" placeholder="Your Email" value={formState.email} onChange={changeHandler}></input>
                                    <label for="email">Your Email</label>
                                    {validationErrors.message && <div className="text-danger">{validationErrors.email}</div>}

                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control border-0 bg-light" name="subject" id="subject" placeholder="Subject" value={formState.subject} onChange={changeHandler}></input>
                                    <label for="subject">Subject</label>
                                    {validationErrors.message && <div className="text-danger">{validationErrors.subject}</div>}
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control border-0 bg-light" placeholder="Leave a message here" name="message" id="message" style={{height: '150px'}} value={formState.message} onChange={changeHandler}></textarea>
                                    <label for="message">Message</label>
                                    {validationErrors.message && <div className="text-danger">{validationErrors.message}</div>}

                                </div>
                            </div>
        
                            <div class="col-12">
                              <button class="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
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
                    <h5 class="modal-title text-center" >Successfully Sent</h5>
                    <button type="button" class="close border-0" onClick={() => setSuccessPopupVisible(false)}>
                    <span >&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                Thank you! We will contact you soon!
                <span></span>
                </div>
                <div class="modal-footer">
                <button type="button" class="border-0" onClick={() => setSuccessPopupVisible(false)}>  </button>
                </div>
                </div>
            </div>
        </div>

    </Popup>
    </div>


    )

}


export default Contact;