'use client'
import React from 'react';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5555';

const HeroStudentProfile = () => {
  return (
    <>
      {/* Add Student Athlete Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto absolute">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Student-Athletes</h2>
          {/* Add your form or input fields here for adding student athletes */}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <a href="/profile/studentprofile/studentadd" className="btn btn-primary absolute top-10 md:top-10 right-10 md:right-10 mt-4 mr-4 bg-blue-900 text-white">
            Add Student Athlete
          </a>
          <div className="overflow-x-auto">
          <table className="table w-full">
              <thead>
                <tr>
                  <th className="font-semibold text-lg text-black">Sport</th>
                  <th className="font-semibold text-lg text-black">Student Name</th>
                  <th className="font-semibold text-lg text-black">Medical Cert Status</th>
                  <th className="font-semibold text-lg text-black">Contact</th>
                  <th className="font-semibold text-lg text-black">Deficiencies</th>
                  <th className="font-semibold text-lg text-black">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample row, replace with dynamic data */}
                <tr>
                  <td className="text-lg font-bold text-black">Football</td>
                  <td className="text-lg font-bold text-black">John Doe</td>
                  <td className="text-lg font-bold text-black">Valid</td>
                  <td className="text-lg font-bold text-black">john.doe@example.com</td>
                  <td className="text-lg font-bold text-black">None</td>
                  <td>
                    <button className="text-blue-500 hover:underline">View</button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
                <tr>
                  <td className="text-lg font-bold text-black">Football</td>
                  <td className="text-lg font-bold text-black">John Doe</td>
                  <td className="text-lg font-bold text-black">Valid</td>
                  <td className="text-lg font-bold text-black">john.doe@example.com</td>
                  <td className="text-lg font-bold text-black">None</td>
                  <td>
                    <button className="text-blue-500 hover:underline">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroStudentProfile;