'use client'
import React, { useState, useEffect, useCallback, ChangeEvent, FormEvent } from 'react';
import { Student } from '../src/types folder/types';
import { SportCategory } from '../src/types folder/enums';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

const StudentAddForm: React.FC = () => {
  const [student, setStudents] = useState<Student[]>([]);

  // Fetching students
  const fetchStudent = useCallback(async () => {
    try {
      const response = await fetch(`${backendUrl}/Student`);
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data: Student[] = await response.json();
      setStudents(data);
      // Calculate total pages
    } catch (error) {
      console.error(error);
    }
  }, [backendUrl]);

  useEffect(() => {
    fetchStudent();
  }, [fetchStudent]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    sport: '', 
    contact: 0,
    course: '',
    year: 0,
    birthdate: '',
    nationality: '',
    weight: 0,
    height: 0,
    bloodType: '',
    medicalCertificate: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/Student`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Student added successfully');
        fetchStudent();
      } else {
        throw new Error('Failed to add student');
      }
    } catch (error) {
      console.error('Error occurred while adding student', error);
    }
  };

//edit function
  const editStudent = async (editedStudent: Student) => {
    try {
      const response = await fetch(`${backendUrl}/Student/${editedStudent.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedStudent),
      }); 
      if (!response.ok) {
        throw new Error('Failed to edit student');
      }
      fetchStudent();
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Student-Athletes Add Profile</h2>
        <form onSubmit={handleSubmit}>
  
          {/* Checkbox group for selecting sports */}
          <input type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            placeholder="First Name" 
            className="input input-bordered w-full max-w-xs" />

            <input type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            placeholder="Last Name" 
            className="input input-bordered w-full max-w-xs" />
          
            <input type="number" 
            name  ="contact" 
            value={formData.contact} 
            onChange={handleChange} 
            placeholder="Contact" 
            className="input input-bordered w-full max-w-xs" />

            <input type="text" 
            name="course" 
            value={formData.course} 
            onChange={handleChange} 
            placeholder="Course" 
            className="input input-bordered w-full max-w-xs" />
            
            <input type="number" 
            name="year" 
            value={formData.year} 
            onChange={handleChange} 
            placeholder="Year" 
            className="input input-bordered w-full max-w-xs" />

            <input type="date" 
            name="birthdate" 
            value={formData.birthdate} 
            onChange={handleChange} 
            placeholder="birthdate" 
            className="input input-bordered w-full max-w-xs" />

            <input type="text" 
            name="nationality" 
            value={formData.nationality}
            onChange={handleChange} 
            placeholder="Nationality" 
            className="input input-bordered w-full max-w-xs" />

            <input type="number" 
            name="weight" 
            value={formData.weight} 
            onChange={handleChange} 
            placeholder="Weight in KG" 
            className="input input-bordered w-full max-w-xs" />

            <input type="number" 
            name="height" 
            value={formData.height} 
            onChange={handleChange} 
            placeholder="Height in CM" 
            className="input input-bordered w-full max-w-xs" />
            {/* Add other input fields */}
            
            <input type="file" 
            name="medicalCertificate" 
            onChange={handleChange} 
            placeholder="Medical Certificate" 
            className="input input-bordered w-full max-w-xs" />
       
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
  }
export default StudentAddForm;
  