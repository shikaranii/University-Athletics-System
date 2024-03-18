// pages/profile/page.js
import Link from "next/link";
import Navbar from "../../../components/Navbar"; // Import Navbar component
import "daisyui/dist/full.css";
import CoachProfile from '../../../components/Coach/coachProfile';

const CoachPage = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow">
        <CoachProfile />
      </div> 
    </div>
  );
};

export default CoachPage;
