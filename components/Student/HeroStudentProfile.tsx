'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { Student } from '../../src/types folder/types';

const HeroStudentProfile = () => {
  const [students, setStudents] = useState([]);
  const [rowsPerPage] = useState<number>(12);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

  const fetchStudents = useCallback(async () => {
    try {
      const response = await fetch(`${backendUrl}/Student`);
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data: Student[] = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  }, [backendUrl]);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]); 

  //delete function
  const handleDeleteStudent = async (id: number) => {
    try {
      const response = await fetch(`${backendUrl}/Student/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete student');
      }
      // Filter out the deleted student from the state
      setStudents(prevStudents => prevStudents.filter(student => student.id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };
  return (
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
                    <td>
                      <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
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
