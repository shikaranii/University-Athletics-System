
import React from 'react';
import Navbar from '../../components/Navbar'; // Import Navbar component
import 'daisyui/dist/full.css';
import Hero from '../../components/Hero';

const Dashboard = () => {
  return (
    <div className="flex">
    <Navbar />
    <div className="flex-1 p-8">

      <Hero /> {/* Include Hero component */}
      
     
        </div>
      </div>

);
};
export default Dashboard;
