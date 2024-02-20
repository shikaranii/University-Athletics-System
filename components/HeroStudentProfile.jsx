'use client'
import React, { useState, useEffect, useCallback } from 'react';


const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

const HeroStudentProfile = () => {
  const [students, setStudents] = useState([]);

// useEffect(() => {
//   // Fetch student data from the backend API
//   const fetchStudents = async () => {
//     try {
//       const response = await fetch(`${backendUrl}/student`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch students');
//       }
//       const data = await response.json();
//       setStudents(data); // Update state with fetched students
//     } catch (error) {
//       console.error('Error fetching students:', error);
//     }
//   };

//   fetchStudents(); // Call the fetchStudents function when component mounts
// }, []); // Empty dependency array to ensure effect runs only once

  const fetchStudents = useCallback(async () => {
    try{
      const response = await fetch(`${backendUrl}/student`);
      if(!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data = await response.json();
      setStudents(data); // Update state with fetched students
    }catch (error) {
      console.error('Error fetching students:', error);
      console.log(data);
    }

  }, [backendUrl]);

  useEffect(() => {
    fetchStudents();
  },[fetchStudents]);

  return (
    <>
      {/* Add Student Athlete Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto absolute">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Student-Athletes</h2>
          {/* Add your form or input fields here for adding student athletes */}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <a href="/profile/studentprofile/studentadd" className="btn btn-primary absolute top-10 md:top-10 right-10 md:right-10 mt-4 mr-4 bg-blue-900 text-white">
            Add Student Athlete
          </a>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="font-semibold text-lg text-black">Sport</th>
                  <th className="font-semibold text-lg text-black">Student First Name</th>
                  <th className="font-semibold text-lg text-black">Student Last Name</th>
                  <th className="font-semibold text-lg text-black">Contact</th>
                  <th className="font-semibold text-lg text-black">Course</th>
                  <th className="font-semibold text-lg text-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td className="text-lg font-medium text-black">{student.sport}</td>
                    <td className="text-lg font-medium text-black">{student.firstName}</td>
                    <td className="text-lg font-medium text-black">{student.lastName}</td>
                    <td className="text-lg font-medium text-black">{student.contact}</td>
                    <td className="text-lg font-medium text-black">{student.course}</td>
                    <td>
                      <button className="text-blue-500 hover:underline">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroStudentProfile;
