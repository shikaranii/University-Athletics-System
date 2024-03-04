'use client'
import React, { useCallback, useState, useEffect } from 'react';
import { Student } from '../src/types folder/types';
import { SportCategory } from '../src/types folder/types';
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';

const StudentAddForm = () => {
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

  const [sports, setSports] = useState([]); // Initialize sports state

  const handleChange = (e) => {
    const { name, value } = e.target;

  // Convert 'contact' and 'year' values to integers
  const updatedValue = (name === 'contact' || name === 'year') ? parseInt(value, 10) : value;

  // Convert 'weight' and 'height' values to floats
  const processedValue = (name === 'weight' || name === 'height') ? parseFloat(value) : updatedValue;

  // Convert date to string if the name is 'birthdate' and value is a Date instance
  const finalValue = (name === 'birthdate' && value instanceof Date) ? value.toISOString() : processedValue;

  setFormData(prevState => ({
    ...prevState,
    [name]: finalValue
  }));
};
  
  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: files[0]
  //   }));
  // };

  //WILL EDIT THIS TO ADD SPORT SELECTION
  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await fetch(`${backendUrl}/SportCategory`);
        if (!response.ok) {
          throw new Error(`Failed to fetch sports: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setSports(data);
      } catch (error) {
        console.error('Error fetching sports:', error);
      }
    };

    fetchSports();
  }, []);

  const handleSubmit = async (e) => {
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
            
            {/* <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input input-bordered w-full max-w-xs" /> */}
            
            <select
            name="sport" // Changed to select element
            value={formData.sport}
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs">
            <option value="">Select Sport</option>
            {sports.map((sport) => (
              <option key={sport.id} value={sport.name}>
                {sport.name}
              </option>
            ))}
           </select>

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
