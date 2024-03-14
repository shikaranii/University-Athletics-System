'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Faculty } from '../src/types folder/types';


const coachProfile = () => {
 const [coaches, setCoaches] = useState([]);
 const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000';
 
 const fetchCoaches = useCallback(async () => {
  try {
    const response = await fetch(`${backendUrl}/Faculty`);
    if (!response.ok) {
      throw new Error('Failed to fetch Faculty');
    }
    const data: Faculty[] = await response.json();
    setCoaches(data);
  } catch (error) {
    console.error('Error fetching Faculty:', error);
  }
}, [backendUrl]);

useEffect(() => {
  fetchCoaches();
}, [fetchCoaches]); 

 //delete function
 const handleDeleteFaculty = async (id: number) => {
  try {
    const response = await fetch(`${backendUrl}/Faculty/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete faculty');
    }
    setCoaches(prevCoaches => prevCoaches.filter(faculty => faculty.id !== id));
  } catch (error) {
    console.error('Error deleting faculty:', error);
  }
};
 return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto absolute">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Coach Profiles</h2>
          {/* Add your form or input fields here for adding coaches */}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <a href="/profile/coachprofile/coachadd" className="btn btn-primary absolute top-10 md:top-10 right-10 md:right-10 mt-4 mr-4 bg-blue-900 text-white">
            Add Coach Profile
          </a>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                 <th className="font-semibold text-lg text-black">Coach ID</th>
                 <th className="font-semibold text-lg text-black">Coach First Name</th>
                 <th className="font-semibold text-lg text-black">Coach Last Name</th>
                 <th className="font-semibold text-lg text-black">Contact</th>
                 <th className="font-semibold text-lg text-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {coaches.map((coach, index) => (
                 <tr key={index}>
                    <td className="text-lg font-medium text-black">{coach.id}</td>
                    <td className="text-lg font-medium text-black">{coach.name}</td>
                    <td className="text-lg font-medium text-black">{coach.lastName}</td>
                    <td className="text-lg font-medium text-black">{coach.contact}</td>
             
        
                    <td>
                      <button className="text-blue-500 hover:underline">View</button>
                    </td>
                    <td>
                      <button onClick={() => handleDeleteFaculty(coach.id)}>Delete</button>
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

export default coachProfile;
