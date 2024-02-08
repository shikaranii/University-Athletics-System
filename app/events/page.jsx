// pages/events/page.js
// Assuming you have a Navigation component
import Link from 'next/link';
import 'daisyui/dist/full.css';
import Navbar from "../../components/Navbar";
import HeroEvent from '../../components/HeroEvent';

const EventsPage = () => {
  return (
    <div className="flex">
    <Navbar />
    <div className="flex-1 p-8">
      <HeroEvent />

    {/* Page content here */}
    
      
      
  </div>
  </div>

  );
}

export default EventsPage;
