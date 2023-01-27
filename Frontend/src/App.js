// Filename - App.js

import React from "react";
import Navbar from './components/navbar';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import About from "./pages/aboutus";
import SingleCourse from "./components/course_single"

import Home from "./pages/home";
import Course from "./pages/course";
import Register from "./pages/register";
import Contactus from "./pages/contactUs";
import LoginPage from "./components/login";
import StudentData from "./components/students";

import Gallerys from "./pages/gallery";



function App() {

	return (
		<Router>
		
			<Routes>
                <Route path="/" element={<Home/>} />
				<Route exact path="/about" element={<About/>} />
				<Route path="/courses" element={<Course/>}/>
				<Route path="/register" element={<Register />} />
				<Route path="/gallery" element={<Gallerys/>} /> 
				<Route
					path="/contact-us"
					element={<Contactus/>}
				/> 
				<Route
					path="/course-single"
					element={<SingleCourse/>}
				/> 
				<Route
					path="/admin"
					element={<LoginPage/>}
				/> 
				<Route
					path="/students"
					element={<StudentData/>}
				/> 
				
			</Routes>
       
		</Router>
	);
}

export default App;
