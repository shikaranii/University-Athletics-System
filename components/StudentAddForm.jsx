'use client'
import React, { useState } from 'react';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5555';

const StudentAddForm = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sport: '',
    contact: '',
    course: '', 
    year: '',
    birthdate: '',
    nationality: '',
    academicYear: '',
    weight: '',
    height: '',
    bloodType: '',
    emergencyContact: '',
    emergencyContactPerson: '',
    medicalCertificate: null
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      // Send form data to backend API using fetch
      console.log(formData);
      const response = await fetch('api/student', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to add Student');
      }

      // Reset form data after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        sport: '',
        contact: '',
        course: '', 
        year: '',
        birthdate: '',
        nationality: '',
        academicYear: '',
        weight: '',
        height: '',
        bloodType: '',
        emergencyContact: '',
        emergencyContactPerson: '',
        medicalCertificate: null
      });

      // Handle success message or perform other actions
    } catch (error) {
      console.error('Error adding student:', error);
      // Handle error message or perform error handling
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // JSX for the form
  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Student-Athletes Add Profile</h2>
          <form onSubmit={handleSubmit}>
            {/* Input fields */}
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="sport" value={formData.sport} onChange={handleChange} placeholder="Sport" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="course" value={formData.course} onChange={handleChange} placeholder="Course" className="input input-bordered w-full max-w-xs" />
            <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" className="input input-bordered w-full max-w-xs" />
            <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} placeholder="Birthdate" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Nationality" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="academicYear" value={formData.academicYear} onChange={handleChange} placeholder="Academic Year" className="input input-bordered w-full max-w-xs" />
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight in KG" className="input input-bordered w-full max-w-xs" />
            <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Height in CM" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="bloodType" value={formData.bloodType} onChange={handleChange} placeholder="Blood Type" className="input input-bordered w-full max-w-xs" />
            <input type="number" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} placeholder="Emergency Contact" className="input input-bordered w-full max-w-xs" />
            <input type="text" name="emergencyContactPerson" value={formData.emergencyContactPerson} onChange={handleChange} placeholder="Emergency Contact Person" className="input input-bordered w-full max-w-xs" />

            
            
            {/* Add other input fields */}
            <input type="file" name="medicalCertificate" onChange={handleChange} placeholder="Medical Certificate" className="input input-bordered w-full max-w-xs" />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default StudentAddForm;
