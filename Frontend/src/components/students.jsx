import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudentData = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const cookieString = document.cookie;
    const tokenMatch = cookieString.match(/token=([^;]+)/);
    const token = tokenMatch ? decodeURIComponent(tokenMatch[1]) : null;

    if (!token) {
      navigate("/admin");
      return;
    }

    axios.get("https://home.jupitertechinstitute.com/api/students", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log('Student Data:', response.data);
      setStudents(response.data || []);
    })
    .catch((error) => {
      console.error(error);
      navigate("/admin");
    });
  }, [navigate]);

  const handleSearchChange = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const handleDeleteStudent = async (studentId) => {
    try {
      await axios.delete(`http://student.jupitertechinstitute.com/api/students/delete/${studentId}`);
      setStudents((prevStudents) => prevStudents.filter((student) => student.id !== studentId));
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const filteredStudents = students && students.filter((student) =>
    student.fname && student.fname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <SearchBar onSearchChange={handleSearchChange} />
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Educational Status</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents && filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.email}>
                  <td>{student.fname}</td>
                  <td>{student.Lname}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td>{student.Age}</td>
                  <td>{student.gender}</td>
                  <td>{student.education}</td>
                  <td>{student.course}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">No matching students found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        className="form-control"
        id="search"
        placeholder="Enter student name..."
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
};

export default StudentData;
