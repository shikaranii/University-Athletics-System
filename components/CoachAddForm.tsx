'use client';
import React, { useCallback, useState, useEffect } from 'react';
// import { Coach } from '../src/types folder/types'; // Adjust the import path as necessary

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

const CoachAddForm = () => {
 const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    sportsCoached: '', // Adjusted for coach context
    experience: '', // New field for coach experience
    certification: '', // New field for coach certification
    // Add other fields as necessary
 });

 // Assuming there's no need to fetch sports or categories for a coach,
 // but if there is, you can use a similar approach as in the StudentAddForm

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
 };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/Coach`, { // Adjusted endpoint for coach
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Coach added successfully');
        // Optionally, redirect or clear the form after successful submission
      }
    } catch (error) {
      console.error('Error occurred while adding coach', error);
    }
 };

 return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Add Coach Profile</h2>
          <form onSubmit={handleSubmit}>
            {/* Adjusted input fields for coach context */}
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

            <input type="text" 
            name="contact" 
            value={formData.contact} 
            onChange={handleChange} 
            placeholder="Contact" 
            className="input input-bordered w-full max-w-xs" />
{/* 
            <input type="text" 
            name="sportsCoached" 
            value={formData.sportsCoached} 
            onChange={handleChange} 
            placeholder="Sports Coached" 
            className="input input-bordered w-full max-w-xs" /> */}

            {/* <input type="text" 
            name="experience" 
            value={formData.experience} 
            onChange={handleChange} 
            placeholder="Experience" 
            className="input input-bordered w-full max-w-xs" /> */}

            <input type="text" 
            name="certification" 
            value={formData.certification} 
            onChange={handleChange} 
            placeholder="Certification" 
            className="input input-bordered w-full max-w-xs" />

            {/* Add other input fields as necessary */}

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>
    </>
 );
}

export default CoachAddForm;
