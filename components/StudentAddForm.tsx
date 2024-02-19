'use client'
import React, { useCallback, useState } from 'react';
import { Student } from '../src/types folder/types';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5555';

const StudentAddForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sport: '',
    contact: '',
    course: '',
    year: 0,
    birthdate: '',
    nationality: '',
    academicYear: '',
    weight: 0,
    height: 0,
    bloodType: '',
    emergencyContact: 0,
    emergencyContactPerson: '',
    medicalCertificate: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/students`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Student added successfully, you can do something here like showing a success message
        console.log('Student added successfully');
      } else {
        // Handle error response from the server
        console.error('Failed to add student');
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
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="input input-bordered w-full max-w-xs" />
            {/* Add other input fields */}
            <input type="file" name="medicalCertificate" onChange={handleFileChange} placeholder="Medical Certificate" className="input input-bordered w-full max-w-xs" />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>
    </>
    // <>
    //   <section className="bg-gray-100 py-8">
    //     <div className="container mx-auto">
    //       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Student-Athletes Add Profile</h2>
    //       <form onSubmit={handleSubmit}>
    //         {/* Input fields */}
    //         <input type="text" name="firstName" value= placeholder="First Name" className="input input-bordered w-full max-w-xs" />
    //         <input type="text" name="lastName" value= placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
    //         <input type="text" name="email" value= placeholder="Email" className="input input-bordered w-full max-w-xs" />
    //         <input type="text" name="sport" value=  placeholder="Sport" className="input input-bordered w-full max-w-xs" />
    //         <input type="text" name="contact" value=  placeholder="Contact" className="input input-bordered w-full max-w-xs" />
    //         <input type="text" name="course" value=  placeholder="Course" className="input input-bordered w-full max-w-xs" />
    //         <input type="number" name="year" value=  placeholder="Year" className="input input-bordered w-full max-w-xs" />
    //         <input type="date" name="birthdate" value= placeholder="Birthdate" className="input input-bordered w-full max-w-xs" />
    //         <input type="text" name="nationality" value= placeholder="Nationality" className="input input-bordered w-full max-w-xs" />
    //         <input type="text" name="academicYear" value=  placeholder="Academic Year" className="input input-bordered w-full max-w-xs" />
    //         <input type="number" name="weight" value= placeholder="Weight in KG" className="input input-bordered w-full max-w-xs" />
    //         <input type="number" name="height" value=  placeholder="Height in CM" className="input input-bordered w-full max-w-xs" />
    //         <input type="text" name="bloodType" value=  placeholder="Blood Type" className="input input-bordered w-full max-w-xs" />
    //         <input type="number" name="emergencyContact" value=  placeholder="Emergency Contact" className="input input-bordered w-full max-w-xs" />
    //         <input type="text" name="emergencyContactPerson" value=  placeholder="Emergency Contact Person" className="input input-bordered w-full max-w-xs" />



    //         {/* Add other input fields */}
    //         <input type="file" name="medicalCertificate" onChange={handleChange} placeholder="Medical Certificate" className="input input-bordered w-full max-w-xs" />
    //         <button type="submit" className="btn btn-primary">Submit</button>
    //       </form>
    //     </div>
    //   </section>
    // </>
  );
}
export default StudentAddForm;
