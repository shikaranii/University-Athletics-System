// ProfileComponent.js
import '../styles/globals.css'
import React from 'react';
import Image from 'next/image';

const ProfileComponent = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Profile Picture */}
          <div className="flex items-center mb-4">
            <img src="/ateneo.png" alt="Profile" className="w-10 h-10 rounded-full mr-2" />
            <div>
              <p className="text-sm font-medium">Sean Elijah Chavez</p>
              <p className="text-xs text-gray-500">sevchavez@addu.edu.ph</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
          {/* Logout Text */}
          <a href="#" className="text-xs text-gray-500">Logout</a>
        </div>
      </div>
    </nav>
  );
};

export default ProfileComponent;
