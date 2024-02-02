import React , { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [isSticky, setIsSticky] = useState(false);

  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

return (
<div className={isSticky ? 'sticky' : ''}>
<div className="container-fluid bg-dark text-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Sheger city, Burayu, Tsera Tsion</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <small className="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 09.00 AM - 05.00 PM</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small>+251 908 08 8309</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center mx-n2">
                    <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.facebook.com/profile.php?id=61551402171263"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://t.me/jupiterinstituteoftechnology"><i className="fab fa-telegram"></i></a>
                    <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://vm.tiktok.com/ZM6eCGcjG"><i className="fab fa-tiktok"></i></a>
                    <a className="btn btn-square btn-link rounded-0" href="/"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
 
        <img alt="new" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5" src="img/Jupiter.png" ></img>
  
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div onClick={scrollToTop} className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className={"nav-item nav-link" + (url === "/" ?" active" : "")} >Home</Link>
                <Link to="/about" className={"nav-item nav-link" + (url === "/about" ?" active" : "")} >About</Link>
                <Link to="/gallery" className={"nav-item nav-link" + (url === "/gallery" ?" active" : "")} >Gallery</Link>
                <Link to="/courses" className={"nav-item nav-link" + (url === "/courses" ?" active" : "")} >Courses</Link>
                <Link to="/contact-us" className={"nav-item nav-link" + (url === "/contact-us" ?" active" : "")} >Contact</Link>
            </div>
            <Link to="/register" className="btn btn-primary py-4 px-lg-5 d-block">REGISTER<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
</nav>

</div>


)



}

export default Navbar;