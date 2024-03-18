// pages/profile/page.js
import Link from "next/link";
import Navbar from "../../../../components/Navbar"; // Import Navbar component
import "daisyui/dist/full.css";
import CoachAddForm from "../../../../components/Coach/CoachAddForm";


const CoachAdd = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-grow">
       <CoachAddForm />
      </div> 
    </div>
  )
}
export default CoachAdd;