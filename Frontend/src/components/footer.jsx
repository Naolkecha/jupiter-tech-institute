import React from "react";


const Footer = () => {
return (
<div>
<div className="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-5 col-md-6">
                    <h4 className="text-white mb-4">Get In Touch</h4>
                    <h2 className="text-primary mb-4">JUPITER</h2>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Sheger city, Burayu, Tsera Tsion</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+251 908 08 8309</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@jupitertechinstitute.com</p>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="/aboout">About Us</a>
                    <a className="btn btn-link" href="/contact-us">Contact Us</a>
                    <a className="btn btn-link" href="/courses">Our Services</a>
                    <a className="btn btn-link" href="/">Support</a>
                </div>

                <div className="col-lg-3 col-md-6">
                   
                    <h6 className="text-white mt-4 mb-3">Follow Us</h6>
                    <div className="d-flex pt-2">


                        <a className="btn btn-square btn-outline-light me-1" href="https://t.me/jupiterinstituteoftechnology"><i className="fab fa-telegram"></i></a>
                        <a className="btn btn-square btn-outline-light me-1" href="https://www.facebook.com/profile.php?id=61551402171263"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light me-1" href="/"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light me-0" href="https://vm.tiktok.com/ZM6eCGcjG"><i className="fab fa-tiktok"></i></a>
                    

                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a href="/">www.jupitertechinistitute.com</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                    Designed By <a href="https://naolkecha.com">Naol Kecha</a>
                    
                </div>
            </div>
        </div>
    </div>
</div>

)
}
export default Footer;