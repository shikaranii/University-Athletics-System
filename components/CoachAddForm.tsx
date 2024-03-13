'use client'
import React, { useState, useEffect, useCallback, ChangeEvent, FormEvent } from 'react';
import { Faculty } from '../src/types folder/types';
import { SportCategory } from '../src/types folder/enums';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

const CoachAddForm: React.FC = () => {
  const [facMembers, setFacMembers] = useState<Faculty[]>([]);
  const [rowsPerPage] = useState<number>(12); // number of items that is being displayed in a row
  const [totalPages, setTotalPages] = useState<number>(0); //

  // Fetching students
  const fecthFaculty = useCallback(async () => {
    try {
      const response = await fetch(`${backendUrl}/Faculty`);
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data: Faculty[] = await response.json();
      setFacMembers(data);
      // Calculate total pages
      const totalPages = Math.ceil(data.length / rowsPerPage);
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
    }
  }, [backendUrl, rowsPerPage]);

  useEffect(() => {
    fecthFaculty();
  }, [fecthFaculty]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    sports: [] as SportCategory[], 
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
    // Update formData state based on input changes
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
        // Fetch students again to update the list
        fecthFaculty();
      } else {
        throw new Error('Failed to add faculty');
      }
    } catch (error) {
      console.error('Error occurred while adding faculty', error);
    }
  };

  const handleDeleteStudent = async (facultyId: number) => {
    try {
      await fetch(`${backendUrl}/Faculty/${facultyId}`, {
        method: 'DELETE',
      });
      setFacMembers((prevStudents) => prevStudents.filter((faculty) => faculty.id !== facultyId));
    } catch (error) {
      console.error('Error occurred while deleting student:', error);
    }
  };
  
  const editFaculty = async (editFaculty: Faculty) => {
    try {
      const response = await fetch(`${backendUrl}/Faculty/${editFaculty.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editFaculty),
      }); 
      if (!response.ok) {
        throw new Error('Failed to edit student');
      }
      fecthFaculty();
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
export default CoachAddForm;
  