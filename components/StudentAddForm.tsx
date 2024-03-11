'use client'
import React, { useCallback, useState, useEffect } from 'react';
import { Student } from '../src/types folder/types';
import { SportCategory } from '../src/types folder/enums';
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

const StudentAddForm = () => {
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
//iuseState ang sportCategory 
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // If the name is 'contact' or 'year', convert value to integer
    const updatedValue = (name === 'contact' || name === 'year') ? parseInt(value, 10) : value;
  
    // If the name is 'weight' or 'height', convert value to float
    const processedValue = (name === 'weight' || name === 'height') ? parseFloat(value) : updatedValue;
  
    // Convert date to string if the name is 'birthdate' and value is a Date instance
    const finalValue = (name === 'birthdate' && value instanceof Date) ? value.toISOString() : processedValue;
  
  };

  

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: files[0]
  //   }));
  // };


 

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/Student`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(FormData)
      });
      if (response.ok) {
       
        console.log('Student added successfully');
      } 
    } catch (error) {
      console.error('Error occurred while adding student', error);
    }
  };

  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Student-Athletes Add Profile</h2>
          <form onSubmit={handleSubmit}>
            {/* Input fields */}
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
            name="contact" 
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
    </>
  );
  };
export default StudentAddForm;
