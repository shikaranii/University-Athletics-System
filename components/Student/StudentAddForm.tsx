
'use client'
import React, { useState, useEffect, useCallback, ChangeEvent, FormEvent } from 'react';
import { Student, SportCategory } from '../../src/facultytypes.ts/types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

const StudentAddForm: React.FC = () => {
  const [student, setStudents] = useState<Student[]>([]);
  const [formData, setFormData] = useState<Student>({
    id: 0,
    firstName: '',
    lastName: '',
    contact: 0,
    course: '',
    year: 0,
    birthDate: 0,
    nationality: '',
    weight: 0,
    height: 0,
    sport: [], // Initialize as an empty array
  });

  const [sports, setSports] = useState<SportCategory[]>([]);

  // Fetching students
  const fetchStudent = useCallback(async () => {
    try {
      const response = await fetch(`${backendUrl}/Student`);
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data: Student[] = await response.json();
      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  }, [backendUrl]);

  // Fetching sports
  const fetchSports = useCallback(async () => {
    try {
      const response = await fetch(`${backendUrl}/sports`);
      if (!response.ok) {
        throw new Error('Failed to fetch sports');
      }
      const data: SportCategory[] = await response.json();
      setSports(data);
    } catch (error) {
      console.error(error);
    }
  }, [backendUrl]);

  useEffect(() => {
    fetchStudent();
    fetchSports();
  }, [fetchStudent, fetchSports]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'sport' ? [...formData.sport, value] : value // Adjust handling for sport field
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

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Student-Athletes Add Profile</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="input input-bordered w-full max-w-xs mb-4" />
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="input input-bordered w-full max-w-xs mb-4" />
          <input type="number" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" className="input input-bordered w-full max-w-xs mb-4" />
          <input type="text" name="course" value={formData.course} onChange={handleChange} placeholder="Course" className="input input-bordered w-full max-w-xs mb-4" />
          <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" className="input input-bordered w-full max-w-xs mb-4" />
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} placeholder="birthdate" className="input input-bordered w-full max-w-xs mb-4" />
          <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Nationality" className="input input-bordered w-full max-w-xs mb-4" />
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight in KG" className="input input-bordered w-full max-w-xs mb-4" />
          <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Height in CM" className="input input-bordered w-full max-w-xs mb-4" />
          <select name="sport" value={formData.sport} onChange={handleChange} className="input input-bordered w-full max-w-xs mb-4" multiple> {/* Allow multiple selections */}
            {sports.map((sport, index) => (
              <option key={index} value={sport}>{sport}</option>
            ))}
          </select>
          <input type="file" name="medicalCertificate" onChange={handleChange} placeholder="Medical Certificate" className="input input-bordered w-full max-w-xs mb-4" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default StudentAddForm;
