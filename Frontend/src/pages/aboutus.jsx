import React from 'react';
import About from '../components/about';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Aboutus = () => {
    return (
   <>
   <Navbar/>
   <div className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center">
            <h1 className="display-4 text-white animated slideInDown mb-4">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="/">Pages</a></li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>
   <About />
   {/* <div className="row g-4 justify-content-center">
    {courses.map((courses)=>(
        <Courses title={courses.title} description={courses.description} price={courses.price} length={courses.length} image={courses.image}/>
       
    ))}
    
    </div> */}
   
   <Footer/>
   </>
    
)
}

export default Aboutus;