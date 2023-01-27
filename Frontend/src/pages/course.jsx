import React, { useState } from 'react';
import Courses from '../components/courses';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const Course = () => {
    const [courses, setCourses] = useState([
        {title:"Mobile Maintenance", description:"Hardware maintenance, Software maintenance, Multimetre usage", price: "1500", length:"3 Months", image:'' },
        {title:"Basic computer skills", description:"Computer System, Computer security, Ms Office Word, Ms Office power point, Ms office Access, Ms office Excel and Ms Office publisher ", price: "1200", length:"3 Months", image:'-2.jpg'},
        {title:"TV maintenance", description:"CRT, LED and LCD", price: "3000", length:"3 Months", image:'' },
        {title:"Computer Maintenance", description:"Advanced level Hardware  maintenance, Software maintenance & windows troubleshooting, Server based Networking(client-server networking)", price: "1500", length:" 2 Weeks", image:'' },
        {title:"Sattelite dish installation", description:"Satellite dish Installation, Receivers maintenance, Gepps maintenance ", price: "1200", length:"3 Months", image:'-2.jpg' },
        {title:"Graphics Design", description:"Photoshop,  Illustrator and InDesign", price: "1200", length:"3 Months", image:'-3.jpg' },
        {title:"Basic language  skills", description: "Afan Oromo, English (spoken and communication) and Amharic", price: "1200", length:"3 Months", image:'-2.jpg' },
        {title:"Camera and Video Editing", description:"Proffessional cameraman and video editing course", price: "2000", length:"3 Months", image:'-3.jpg' },
        {title:"COC Skill Gap", description:"To get ready students for COC exams", price: "1200", length:"3 Months", image:'-3.jpg' },
        {title:"Office Machines Maintenance", description:"", price: "1200", length:"3 Months", image:'-3.jpg' },
        {title:"Building Electrical Installation ", description:"Building Estimation, Building Electrical Installation & Design, Floor plan Reading.", price: "1500", length:"3 Months", image:'-3.jpg' },
        {title:"Other softwares training ", description:"-", price: "--", length:"-", image:'-3.jpg' }

        ])
   
    return (
        <>
<Navbar/>
   <div className="container-xxl py-6">

   <div className="container">
    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '500px'}}>
        <h6 className="text-primary text-uppercase mb-2">Trending Courses</h6>
        <h1 className="display-6 mb-4">Our Courses Upskill You With Technology knowledge</h1>
    </div>
    <div className="row g-4 justify-content-center">
    {courses.map((courses)=>(
        <Courses title={courses.title} description={courses.description} price={courses.price} length={courses.length} image={courses.image}/>
       
    ))}
    
    </div>
     </div>
     </div>
     <Footer/>
    </>
  
)
}

export default Course;