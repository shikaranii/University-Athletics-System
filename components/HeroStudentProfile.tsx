'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { Student } from '../src/types folder/types';

const HeroStudentProfile = () => {

  const [students, setStudents] = useState([]);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';
  // Fetching students
  interface StudentAddProps {
    student: Student;
    handleDeleteStudent: (id: number) => void;
    editStudent: (item: Student) => void;
}
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
  try {
    const response = await fetch(`${backendUrl}/Student`);
    if (!response.ok) {
      throw new Error('Failed to fetch students im so pretty');
    }
    const data = await response.json();
    setStudents(data); // Update state with fetched students
  } catch (error) {
    console.error('Error fetching students:', error);
    // Removed the console.log(data) line from here
  }
}, [backendUrl]);

  useEffect(() => {
    fetchStudents();
  },[fetchStudents]);

  
  const StudentProfile: React.FC<StudentAddProps> = ({ student, handleDeleteStudent, editStudent }) => { return (
    <>
  
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto absolute">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Student-Athletes</h2>
          {/* Add your form or input fields here for adding student athletes */}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
        <div className="flex">
          <a href="/profile/studentprofile/studentadd" className="btn btn-primary mr-4 bg-blue-900 text-white">
            Add Student Athlete
          </a>
          <button onClick={() => handleDeleteStudent(students.id || 0)} className="btn btn-primary bg-red-900 text-white">
          Delete Student
          </button>

        </div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="font-semibold text-lg text-black">Student ID</th>
                  <th className="font-semibold text-lg text-black">Student First Name</th>
                  <th className="font-semibold text-lg text-black">Student Last Name</th>
                  <th className="font-semibold text-lg text-black">Contact</th>
                  <th className="font-semibold text-lg text-black">Course</th>
                  <th className="font-semibold text-lg text-black">Sport</th>
                  <th className="font-semibold text-lg text-black">Weight</th>
                  <th className="font-semibold text-lg text-black">Height</th>
                  <th className="font-semibold text-lg text-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td className="text-lg font-medium text-black">{student.id}</td>
                    <td className="text-lg font-medium text-black">{student.firstName}</td>
                    <td className="text-lg font-medium text-black">{student.lastName}</td>
                    <td className="text-lg font-medium text-black">{student.contact}</td>
                    <td className="text-lg font-medium text-black">{student.course}</td>
                    <td className="text-lg font-medium text-black">{student.number}</td>
                    <td className="text-lg font-medium text-black">{student.sport}</td>
                    <td className="text-lg font-medium text-black">{student.weight}</td>
                    <td className="text-lg font-medium text-black">{student.height}</td>
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
}
export default HeroStudentProfile;
